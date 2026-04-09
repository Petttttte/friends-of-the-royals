@echo off
title Friends of the Royals - Dev Server
echo.
echo  ==========================================
echo   Friends of the Royals - Starting...
echo  ==========================================
echo.
cd /d "%~dp0"
echo  Starting Next.js dev server...
echo  Once you see "Ready", open your browser at:
echo  http://localhost:3000
echo.
npm run dev
pause
