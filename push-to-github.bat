@echo off
echo ========================================
echo  Signal Generator GitHub Push Script
echo ========================================
echo.
echo Repository: ubhanuprasad/Signal-generator-visualizer
echo Status: Ready to push
echo.
echo INSTRUCTIONS:
echo 1. You'll be prompted for GitHub username and password
echo 2. Use your GitHub username
echo 3. For password, use Personal Access Token (NOT your GitHub password)
echo.
echo To get Personal Access Token:
echo - Go to GitHub.com → Settings → Developer settings → Personal access tokens
echo - Generate new token with 'repo' permissions
echo - Copy the token and use it as password
echo.
pause
echo.
echo Starting push...
"C:\Program Files\Git\bin\git.exe" push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ✅ SUCCESS! Project pushed to GitHub
    echo Repository URL: https://github.com/ubhanuprasad/Signal-generator-visualizer
    echo.
    echo Next steps:
    echo 1. Go to repository Settings → Pages
    echo 2. Enable GitHub Pages from main branch
    echo 3. Your app will be live at: https://ubhanuprasad.github.io/Signal-generator-visualizer/
) else (
    echo ❌ Push failed. Check your credentials and try again.
)
echo.
pause