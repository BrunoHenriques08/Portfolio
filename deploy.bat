@echo off
echo [DEPLOY] Iniciando processo de deploy...

echo [BUILD] Executando build...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [ERRO] Build falhou!
    pause
    exit /b 1
)

echo [GIT] Adicionando arquivos...
git add .

echo [GIT] Fazendo commit...
git commit -m "Update portfolio - %date% %time%"

echo [GIT] Enviando para branch main...
git push origin main
if %ERRORLEVEL% neq 0 (
    echo [AVISO] Push para main falhou, continuando...
)

echo [DEPLOY] Fazendo deploy para GitHub Pages...
git subtree push --prefix dist origin gh-pages
if %ERRORLEVEL% neq 0 (
    echo [ERRO] Deploy falhou!
    pause
    exit /b 1
)

echo [SUCESSO] Deploy concluido!
echo Site disponivel em: https://BrunoHenriques08.github.io/Portfolio/
pause
