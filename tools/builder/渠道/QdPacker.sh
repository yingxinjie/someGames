#!/bin/bash
# 参数：渠道名 原包路径 解包路径 渠道文件路径 签名文件路径 签名别名 签名密码 生成路径 生成文件名
# Linux: QdPacker yzbb /home/packer/app.apk /home/packer/app /home/packer/qd.json /home/packer/key.keystore mxdl 123456 /home/packer/result/ jlmx_yzbb
# Windows: ./QdPacker.sh yzbb E:/Packer/app.apk E:/Packer/app E:/Packer/qd.json E:/Packer/key.keystore mxdl 123456 E:/Packer/result jlmx_yzbb

nameQd=$1
pathOrigin=$2
pathUnpack=$3
pathQdFile=$4
pathSignFile=$5
nameSignAlias=$6
nameSignPass=$7
pathResult=$8
nameReulst=$9

if [ "$nameQd" == "" ]; then
    echo "渠道名为空"
    exit
fi

if [ "$pathOrigin" == "" ]; then
    echo "原包路径为空"
    exit
fi

if [ "$pathUnpack" == "" ]; then
    echo "解包路径为空"
    exit
fi

if [ "$pathQdFile" == "" ]; then
    echo "渠道文件路径为空"
    exit
fi

if [ "$pathSignFile" == "" ]; then
    echo "签名文件路径为空"
    exit
fi

if [ "$nameSignAlias" == "" ]; then
    echo "签名别名为空"
    exit
fi

if [ "$nameSignPass" == "" ]; then
    echo "签名密码为空"
    exit
fi

if [ "$pathResult" == "" ]; then
    echo "生成路径为空"
    exit
fi

if [ ! -f $pathOrigin ]; then
    echo "原包不存在"
    exit
fi

if [ ! -f $pathQdFile ]; then
    echo "渠道文件不存在"
    exit
fi

if [ ! -f $pathSignFile ]; then
    echo "签名文件不存在"
    exit
fi

if ! command -v apktool >/dev/null 2>&1; then
    echo "apktool 不存在 请确认已安装apktool 或者 检查环境变量是否正确"
    exit
fi

if ! command -v jarsigner >/dev/null 2>&1; then
    echo "jarsigner 不存在 请确认已安装jdk 或者 检查环境变量是否正确"
    exit
fi

if [ "$nameReulst" == "" ]; then
    $nameReulst=$nameQd
fi

echo "渠道名：$nameQd"
echo "原包路径：$pathOrigin"
echo "解包路径：$pathUnpack"
echo "渠道文件路径：$pathQdFile"
echo "签名文件路径：$pathSignFile"
echo "签名别名：$nameSignAlias"
echo "签名密码：$nameSignPass"
echo "生成路径：$pathResult"
echo "结果名字: $nameReulst"

echo "解包"
apktool d -f $pathOrigin -o $pathUnpack

echo "复制渠道配置文件"
cp -f $pathQdFile $pathUnpack/assets/

echo "生成渠道文件"
touch $pathUnpack/assets/qd
echo $nameQd >$pathUnpack/assets/qd

echo "重新打包"
apktool b -f $pathUnpack -o $pathResult/$nameReulst.apk

echo "签名"
jarsigner -verbose -keystore $pathSignFile $pathResult/$nameReulst.apk $nameSignAlias -storepass $nameSignPass

echo "清理解包路径"
rm -rf $pathUnpack