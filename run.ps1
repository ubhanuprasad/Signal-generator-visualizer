Write-Host "Starting Signal Generator & Visualizer..." -ForegroundColor Green
$htmlFile = Join-Path (Get-Location) "index.html"
Write-Host "Opening: $htmlFile" -ForegroundColor Yellow

try {
    Start-Process $htmlFile
    Write-Host "✅ Application opened successfully!" -ForegroundColor Green
    Write-Host "If it didn't open automatically, double-click 'index.html' in File Explorer" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Auto-open failed. Please manually open 'index.html'" -ForegroundColor Red
    Write-Host "Location: $htmlFile" -ForegroundColor Yellow
}

Write-Host "`nPress any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")