cd..
CocosCreator --path %cd%\code --compile "platform:android;debug=false;"
copy %cd%\code\build\jsb-default\publish\android\*.apk %cd%\http\apk\*.apk /y
pause
exit