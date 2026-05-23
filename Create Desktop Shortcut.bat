@echo off
setlocal
rem ============================================================
rem  Creates a "Soroban Trainer" shortcut on your Windows Desktop
rem  that points to launch_app.bat in this folder.
rem  Run this ONCE. After that, use the Desktop shortcut.
rem ============================================================
cd /d "%~dp0"

set "LAUNCHER=%~dp0launch_app.bat"
set "WORKDIR=%~dp0"

if not exist "%LAUNCHER%" (
  echo.
  echo  ERROR: launch_app.bat was not found next to this file.
  echo  Keep both .bat files in the same folder and try again.
  echo.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -Command "$ws=New-Object -ComObject WScript.Shell; $d=[Environment]::GetFolderPath('Desktop'); $l=$ws.CreateShortcut((Join-Path $d 'Soroban Trainer.lnk')); $l.TargetPath='%LAUNCHER%'; $l.WorkingDirectory='%WORKDIR%'; $l.WindowStyle=7; $l.IconLocation='%SystemRoot%\System32\shell32.dll,13'; $l.Description='Launch Soroban Trainer Pro'; $l.Save()"

if errorlevel 1 (
  echo.
  echo  Could not create the desktop shortcut automatically.
  echo  No problem - just right-click launch_app.bat and choose
  echo  "Send to"  ^>  "Desktop (create shortcut)".
  echo.
  pause
  exit /b 1
)

echo.
echo  Done. A "Soroban Trainer" shortcut is now on your Desktop.
echo  Double-click it any time to launch the trainer.
echo.
pause
endlocal
