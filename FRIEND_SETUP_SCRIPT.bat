@echo off
echo ========================================
echo  Signal Generator - Friend Setup Script
echo ========================================
echo.
echo This script will copy the complete Signal Generator project
echo from ubhanuprasad's repository to Pawank67m's repository
echo.
echo Repository: https://github.com/Pawank67m/signal-generator-visualizer
echo.
pause
echo.
echo Step 1: Cloning source repository...
git clone https://github.com/ubhanuprasad/Signal-generator-visualizer.git temp-signal-generator
echo.
echo Step 2: Entering project directory...
cd temp-signal-generator
echo.
echo Step 3: Changing remote to friend's repository...
git remote set-url origin https://github.com/Pawank67m/signal-generator-visualizer.git
echo.
echo Step 4: Pushing to friend's repository...
git push -u origin main --force
echo.
if %ERRORLEVEL% EQU 0 (
    echo ✅ SUCCESS! Project deployed to friend's repository
    echo.
    echo Repository URL: https://github.com/Pawank67m/signal-generator-visualizer
    echo.
    echo Next steps:
    echo 1. Go to repository Settings → Pages
    echo 2. Enable GitHub Pages from main branch
    echo 3. Live demo will be at: https://Pawank67m.github.io/signal-generator-visualizer/
    echo.
    echo Project includes:
    echo - Interactive Signal Generator (Sine, Cosine, Square waves)
    echo - ECE Academic Chatbot with comprehensive knowledge
    echo - Real-time parameter controls and equation display
    echo - Professional documentation and guides
    echo - Complete Next.js project structure
    echo.
    echo Credits: Original developer U Bhanu Prasad (9652442961)
) else (
    echo ❌ Push failed. Please check your GitHub credentials.
    echo.
    echo Make sure you have:
    echo 1. Git installed and configured
    echo 2. GitHub authentication set up
    echo 3. Access to the repository
)
echo.
echo Step 5: Cleaning up temporary files...
cd ..
rmdir /s /q temp-signal-generator
echo.
echo Setup complete!
pause