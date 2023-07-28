'use strict';

const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

// 遍历目录
function findPaths(ph, list, ext, filters) {
  var pa = fs.readdirSync(ph);
  pa.forEach(function (file, index) {
    var info = fs.statSync(ph + "/" + file)
    if (info.isDirectory()) {
      findPaths(ph + "/" + file, list, ext, filters);
    } else {

      if (!ext || path.extname(file) == ext) {
        var onlyname = path.basename(file, ext);
        if (!filters || !filters[onlyname]) {
          list.push(ph + "/" + file);
        }
      }
    }
  })
}

function copyFile(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from));
}

function jsonToGz(options) {
  // Editor.log("options", options);
  // 输出目录
  var dest = options.dest;
  let resPath = path.join(dest, 'res'); //资源路径
  // 遍历所有json文件
  var jsons = [];
  // 排除开始场景, 需要开始场景中加入json的加密加载方案,否则可能有问题
  // 这里这对wechat 中的开始的两个json配置文件先排除掉
  var filters = { 'game': true, 'project.config': true };
  findPaths(resPath, jsons, '.json', filters);

  jsons.forEach(jsonPath => {
    // 替换成gz文件
    var outpath = jsonPath.replace(".json", ".gz");
    var data = fs.readFileSync(jsonPath);
    var buff = zlib.gzipSync(data);
    fs.writeFileSync(outpath, buff);
  });

  jsons.forEach(jsonPath => {
    fs.unlinkSync(jsonPath);
  });
}

function onBuildFinished(options, callback) {
  Editor.log('jsonToGzTool Excute'); // 你可以在控制台输出点什么

  let platformPre = {
    "wechatgame": "wx",
    "qqplay": "qq",
  }
  
  if(!platformPre[options.actualPlatform])
  {
     callback()
     return;
  }
  
  jsonToGz(options)
  callback();
}

module.exports = {
  load() {
    // execute when package loaded
    Editor.Builder.on('build-finished', onBuildFinished);
  },

  unload() {
    // execute when package unloaded
    Editor.Builder.removeListener('build-finished', onBuildFinished);
  },
};