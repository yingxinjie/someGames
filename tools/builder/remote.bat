@echo off
cd..
del /f /s /q %cd%\http\remote\*.* /s
xcopy %cd%\code\build\jsb-default\remote\*.* %cd%\http\remote\*.* /s