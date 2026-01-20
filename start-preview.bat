@echo off
:: Start Vite preview in a new PowerShell window and keep it open
powershell -NoExit -Command "cd /d %~dp0; npm run dev"
