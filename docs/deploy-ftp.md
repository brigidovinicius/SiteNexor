# Deploy FTP para Hostinger

Este documento descreve o processo de deploy via FTP usando GitHub Actions.

## Preparação

1. Configure os secrets no GitHub:
   - `FTP_HOST`: Host do servidor FTP
   - `FTP_USER`: Usuário FTP
   - `FTP_PASSWORD`: Senha FTP
   - `FTP_REMOTE_PATH`: Caminho remoto (ex: /public_html)

## Workflow de Deploy

O workflow será criado em `.github/workflows/deploy-ftp.yml` quando estiver pronto para deploy.

### Exemplo de workflow (não ativado ainda):

```yaml
name: Deploy FTP

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: ${{ secrets.FTP_REMOTE_PATH }}
```

## Ativação

Quando estiver pronto para fazer deploy:

1. Crie os secrets no GitHub (Settings > Secrets and variables > Actions)
2. Mova o conteúdo deste documento para `.github/workflows/deploy-ftp.yml`
3. Faça commit e push para ativar o deploy automático

