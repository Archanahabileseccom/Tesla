@echo off
setlocal
cd /d "%~dp0tesla-backend"
if errorlevel 1 (
  echo Could not find the tesla-backend folder.
  exit /b 1
)

py manage.py migrate --noinput
if errorlevel 1 (
  echo Django migrations failed. Check that backend dependencies are installed.
  exit /b 1
)

py manage.py runserver 127.0.0.1:8000
