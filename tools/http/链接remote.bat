@echo off
set LinkDir=%cd%\remote
cd..
set TargetDir=%cd%\code\build\jsb-default\remote

echo %LinkDir%
echo %TargetDir%

mklink /d %LinkDir% %TargetDir%

pause