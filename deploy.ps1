# Script de Deploy para GitHub Pages
Write-Host "[DEPLOY] Iniciando processo de deploy..." -ForegroundColor Green

# Build
Write-Host "[BUILD] Executando build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERRO] Build falhou!" -ForegroundColor Red
    Read-Host "Pressione Enter para continuar"
    exit 1
}

# Git add
Write-Host "[GIT] Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Git commit com timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "[GIT] Fazendo commit..." -ForegroundColor Yellow
git commit -m "Update portfolio - $timestamp"

# Push para main
Write-Host "[GIT] Enviando para branch main..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "[AVISO] Push para main falhou, continuando..." -ForegroundColor Yellow
}

# Deploy para GitHub Pages
Write-Host "[DEPLOY] Fazendo deploy para GitHub Pages..." -ForegroundColor Yellow
git subtree push --prefix dist origin gh-pages
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERRO] Deploy falhou!" -ForegroundColor Red
    Read-Host "Pressione Enter para continuar"
    exit 1
}

Write-Host "[SUCESSO] Deploy concluido!" -ForegroundColor Green
Write-Host "Site disponivel em: https://BrunoHenriques08.github.io/Portfolio/" -ForegroundColor Cyan
Read-Host "Pressione Enter para continuar"
