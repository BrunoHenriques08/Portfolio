# Portfolio - Bruno Henriques

## 🚀 Deploy Scripts

Você agora tem várias opções para fazer deploy das suas alterações:

### Opção 1: Script NPM (Recomendado para Git Bash/Linux)
```bash
npm run deploy-manual
```

### Opção 2: Script Batch (Windows CMD)
```cmd
deploy.bat
```

### Opção 3: Script PowerShell (Windows PowerShell)
```powershell
./deploy.ps1
```

### Opção 4: Comandos Manuais
```bash
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
git subtree push --prefix dist origin gh-pages
```

## 📝 O que cada script faz:

1. **Build** - Compila o projeto com Vite
2. **Git Add** - Adiciona todos os arquivos modificados
3. **Git Commit** - Faz commit com timestamp automático
4. **Push Main** - Envia as mudanças para a branch main
5. **Deploy** - Faz deploy da pasta `dist` para GitHub Pages

## 🌐 Site

Seu portfolio está disponível em: https://BrunoHenriques08.github.io/Portfolio/

## 🔧 Desenvolvimento

Para rodar localmente:
```bash
npm run dev
```

## 📋 Notas

- Use sempre um dos scripts de deploy após fazer alterações
- O GitHub Pages pode levar alguns minutos para atualizar
- Se houver erro no deploy, verifique se não há conflitos no Git
