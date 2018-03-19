@echo off
setlocal
set git=git
for /f "delims=" %%a in ('where git') do set gitext=%%~xa
if '%gitext%' == '.cmd' set git=call %git%
if '%gitext%' == '.bat' set git=call %git%

set version=%1
if not '%version%'=='' goto set_version
echo usage: %0 version
echo version = major.minor.revision
echo.
echo example:
echo %0 0.0.1
goto :fail

:set_version
echo [assembly: System.Reflection.AssemblyVersion("%version%")] > version.cs
echo [assembly: System.Reflection.AssemblyFileVersion("%version%")] >> version.cs
%git% add version.cs
%git% commit -m "version bump to v%version%"
rem %call% git tag v%version%
goto success

:fail
exit /b 1

:success
echo Version was bumped to %version%
exit /b 0