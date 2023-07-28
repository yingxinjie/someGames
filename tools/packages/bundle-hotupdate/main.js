'use strict';

const fse = require('fs-extra');
const path = require('path');
const jszip = require('./jszip');

let serverUrl = '';
let destPath = '';
let packageName = '';
let bundles = [];
let bundleManifest = {};
let platform = '';

//运行平台
const ExcutePlatform = [
    'android',
    'ios'
]
//过滤内置包
const innerBundle = ['internal', 'resources', 'main'];

const utils = {
    getPath(subPath) {
        return path.join(destPath, subPath);
    },

    getFileString(subPath) {
        return fse.readFileSync(this.getPath(subPath), { encoding: 'utf-8' });
    },

    fileReplace(subPath, src, dst) {
        if (platform == 'android') {
            src = src.replace(/\n/g, '\r\n');
            dst = dst.replace(/\n/g, '\r\n');
        }
        this.writeFile(subPath, this.getFileString(subPath).replace(src, dst))
    },

    pathExists(subPath) {
        return fse.pathExistsSync(this.getPath(subPath));
    },

    writeFile(subPath, data) {
        fse.writeFileSync(this.getPath(subPath), data);
    },

    //目录遍历
    recurDir(filePath, fileProcess = (filePath) => null, dicProcess = (filePath) => null, order = false) {
        return new Promise((resolve, reject) => {
            fse.stat(filePath, async (err, stat) => {
                if (!stat) {
                    resolve();
                    return;
                }
                if (stat.isFile()) {
                    //递归遍历处理文件
                    if (fileProcess) await fileProcess(filePath);
                    resolve();
                } else if (stat.isDirectory()) {
                    let dirs = await fse.readdir(filePath);
                    let dirsPrm = dirs.map(dir => this.recurDir(path.join(filePath, dir), fileProcess, dicProcess));

                    //递归遍历处理文件夹
                    if (order == false) { //先处理文件夹内 在处理文件夹
                        await Promise.all(dirsPrm);
                        if (dicProcess) await dicProcess(filePath);
                    } else { //先处理文件夹 再处理文件夹内
                        if (dicProcess) await dicProcess(filePath);
                        await Promise.all(dirsPrm);
                    }
                    resolve();
                }
            })
        })
    },

    deleteFolderRecursive(path) {
        return this.recurDir(path, filePath => {
            fse.unlinkSync(filePath);
        }, dirPath => {
            if (path == dirPath) return;
            fse.rmdirSync(dirPath);
        })
    },

    copyFile(srcPath, tarPath) {
        return new Promise((resolve, reject) => {
            var rs = fse.createReadStream(srcPath)
            rs.on('error', function (err) {
                if (err) {
                    console.log('read error', srcPath)
                }
                resolve();
            })
            var ws = fse.createWriteStream(tarPath)
            ws.on('error', function (err) {
                if (err) {
                    console.log('write error', tarPath)
                }
                resolve();
            })
            ws.on('close', function (ex) {
                resolve();
            })
            rs.pipe(ws)
        })
    },

    copyFolder(srcDir, tarDir) {
        return new Promise((resolve, reject) => {
            fse.readdir(srcDir, (err, files) => {
                if (err) {
                    resolve();
                    return
                }

                let count = 0;
                let checkEnd = () => {
                    count++;
                    if (count == files.length) {
                        Promise.all(promises).then(() => {
                            resolve();
                        });
                    }
                }

                let promises = [];
                files.forEach((file) => {
                    var srcPath = path.join(srcDir, file);
                    var tarPath = path.join(tarDir, file);

                    fse.stat(srcPath, (err, stats) => {
                        if (stats.isDirectory()) {
                            console.log('mkdir', tarPath)
                            fse.mkdir(tarPath, (err) => {
                                if (err) {
                                    console.log(err)
                                    return
                                }
                                promises.push(this.copyFolder(srcPath, tarPath))
                                checkEnd();
                            })
                        } else {
                            promises.push(this.copyFile(srcPath, tarPath));
                            checkEnd();
                        }
                    })
                })
            })
        })
    }
}

const main = {
    //替换main.js文件
    replaceMainJs() {
        let mainSrcStr = `
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;
`
        let mainDstStr = `
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;
    window.REMOTE_SERVER_ROOT = '${serverUrl}';
    window.REMOTE_BUNDLE_MANIFEST = REMOTE_SERVER_ROOT + 'remote/manifest.json';
`
        utils.fileReplace('main.js', mainSrcStr, mainDstStr);
    },

    //生成版本信息
    genBundleManifest() {
        if (bundles.length <= 0) return;
        for (let i in bundles) {
            let _bundle = bundles[i];
            if (innerBundle.indexOf(_bundle.name) > -1) continue;
            Editor.log(`${_bundle.name} 版本：${_bundle.version}`)
            bundleManifest[_bundle.name] = _bundle.version;
        }
        if (utils.pathExists("/remote"))
            utils.writeFile('/remote/manifest.json', JSON.stringify(bundleManifest));
    },
}

//读取目录及文件
function readDir(obj, nowPath, mainPath) {
    let files = fse.readdirSync(nowPath);//读取目录中的所有文件及文件夹（同步操作）
    files.forEach(function (fileName, index) {//遍历检测目录中的文件
        let fullPath = path.join(nowPath, fileName);
        let file = fse.statSync(fullPath);//获取一个文件的属性
        if (file.isDirectory()) {//如果是目录的话，继续查询
            let dirlist = obj.folder(fileName);//压缩对象中生成该目录
            readDir(dirlist, fullPath, mainPath);//重新检索目录文件
        } else {
            obj.file(fileName, fse.readFileSync(fullPath));//压缩目录添加文件
        }
    });
}

//开始压缩文件
async function startZIP(folder, desFolder, serverUrl) {
    let zip = new jszip;

    let cacheDatas = {};
    await utils.recurDir(folder, fileName => {
        let relativeName = path.relative(folder, fileName).replace(/\\/g, '/');
        let remoteUrl = serverUrl + 'remote/' + relativeName;
        let bundle = relativeName.match(/(\S+?)\//)?.[1];
        if (bundle == null) return;
        cacheDatas[relativeName] = {
            id: remoteUrl,
            bundle: bundle,
            url: relativeName,
        };
    });

    readDir(zip, folder, folder);
    zip.file('cacheDatas.json', JSON.stringify(cacheDatas));
    zip.generateAsync({//设置压缩格式，开始打包
        type: "nodebuffer",//nodejs用
        compression: "DEFLATE",//压缩算法
        compressionOptions: {//压缩级别
            level: 1
        }
    }).then(function (content) {
        fse.writeFileSync(path.join(desFolder, "remote.zip"), content, "utf-8");
    });
}

async function onBuildFinished(options, callback) {
    if (ExcutePlatform.indexOf(options.actualPlatform) <= -1) {
        Editor.log(`! Bundle Hotupdate Generator : invalid platform !`);
        callback();
        return;
    }

    Editor.log('※ Bundle Hotupdate Generator Excute ※');
    destPath = options.dest;
    serverUrl = options.settings.server;
    packageName = options.android.packageName;
    bundles = options.bundles;
    platform = options.actualPlatform;

    Editor.log(bundles);

    // main.replaceMainJs();
    //await utils.copyFolder(utils.getPath('/assets'), utils.getPath('/remote'));
    //await utils.deleteFolderRecursive(utils.getPath('/assets'));
    main.genBundleManifest();
    await startZIP(utils.getPath("/remote"), utils.getPath("/assets"), serverUrl);
    Editor.log('※ Bundle Hotupdate Generator Complete ※');
    callback();
}

module.exports = {
    load() {
        Editor.Builder.on('build-finished', onBuildFinished);
    },

    unload() {
        Editor.Builder.removeListener('build-finished', onBuildFinished);
    },
};