@echo off
cd..
CocosCreator --path %cd%/code --build "platform=web-mobile;buildPath=%cd%/http"
exit