@echo off
echo ========================================
echo  Push to Friend's Repository Script
echo ========================================
echo.
echo Friend's Repository: Pawank67m/signal-generator-visualizer
echo Status: Checking repository availability...
echo.

echo Attempting to push to friend's repository...
"C:\Program Files\Git\bin\git.exe" push friend main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ SUCCESS! Project pushed to friend's repository
    echo Repository URL: https://github.com/Pawank67m/signal-generator-visualizer
    echo.
    echo Both repositories now have the Signal Generator project:
    echo 1. Your repo: https://github.com/ubhanuprasad/Signal-generator-visualizer
    echo 2. Friend's repo: https://github.com/Pawank67m/signal-generator-visualizer
    echo.
    echo Next steps for your friend:
    echo 1. Go to repository Settings → Pages
    echo 2. Enable GitHub Pages from main branch
    echo 3. Live demo will be at: https://Pawank67m.github.io/signal-generator-visualizer/
) else (
    echo.
    echo ❌ Push failed. Repository might not exist yet.
    echo.
    echo Instructions for your friend (Pawank67m):
    echo 1. Go to GitHub.com and login
    echo 2. Click "New repository"
    echo 3. Repository name: signal-generator-visualizer
    echo 4. Description: Signal Generator ^& Visualizer for ECE Students
    echo 5. Make it Public
    echo 6. Add README file
    echo 7. Click "Create repository"
    echo.
    echo After friend creates repository, run this script again.
)
echo.
pause