@echo off
setlocal
rem ============================================================
rem  Soroban Trainer Pro - launcher
rem  Opens the trainer HTML in your default web browser.
rem  Keep this .bat in the SAME folder as the .html file.
rem ============================================================
cd /d "%~dp0"

set "APP="
if exist "soroban-trainer.html" (
  set "APP=soroban-trainer.html"
) else (
  for %%F in ("*.html") do if not defined APP set "APP=%%~nxF"
)

if not defined APP (
  echo.
  echo  ============================================================
  echo   ERROR: No Soroban Trainer .html file found in this folder:
  echo     %~dp0
  echo.
  echo   Put launch_app.bat in the SAME folder as the
  echo   Soroban Trainer .html file, then run it again.
  echo  ============================================================
  echo.
  pause
  exit /b 1
)

echo Launching "%APP%" ...
start "" "%APP%"
if errorlevel 1 (
  echo.
  echo  Could not open "%APP%" automatically.
  echo  Right-click the HTML file, choose "Open with",
  echo  and pick Chrome, Edge, or Firefox.
  echo.
  pause
  exit /b 1
)

endlocal
