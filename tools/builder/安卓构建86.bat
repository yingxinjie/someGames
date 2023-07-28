cd..
CocosCreator --path %cd%/code --build "platform:android;md5Cache=true"
del /f /s /q %cd%\http\remote\*.* /s
xcopy %cd%\code\build\jsb-default\remote\*.* %cd%\http\remote\*.* /s
pause
exit