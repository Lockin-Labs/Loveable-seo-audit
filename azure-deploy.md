# Azure Static Web Apps Deployment Guide

## Prerequisites
- Azure account
- GitHub repository
- Azure CLI installed

## Deployment Steps

### 1. Create Azure Static Web App
```bash
# Login to Azure
az login

# Create resource group
az group create --name seo-audit-rg --location "East US"

# Create static web app
az staticwebapp create \
  --name seo-audit-app \
  --resource-group seo-audit-rg \
  --source https://github.com/YOUR-USERNAME/YOUR-REPO \
  --location "East US" \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

### 2. Configure Environment Variables
In Azure Portal, go to your Static Web App → Configuration → Environment variables:

```
VITE_SUPABASE_URL=https://veyuattnxbopbdrxyiho.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Configure Supabase Authentication
In Supabase Dashboard → Authentication → URL Configuration:
- **Site URL**: `https://YOUR-APP-NAME.azurestaticapps.net`
- **Redirect URLs**: 
  - `https://YOUR-APP-NAME.azurestaticapps.net/dashboard`
  - `https://YOUR-APP-NAME.azurestaticapps.net/`

### 4. Azure AD Integration
1. Register app in Azure AD
2. Add redirect URI: `https://YOUR-APP-NAME.azurestaticapps.net/auth/callback`
3. Configure in Supabase → Authentication → Providers → Azure

### 5. Custom Domain (Optional)
```bash
az staticwebapp hostname set \
  --name seo-audit-app \
  --resource-group seo-audit-rg \
  --hostname yourdomain.com
```

## File Structure Ready for Azure
- ✅ `staticwebapp.config.json` - Azure routing config
- ✅ `.github/workflows/azure-static-web-apps.yml` - CI/CD pipeline
- ✅ React app builds to `dist/` folder
- ✅ Supabase integration configured

## Next Steps
1. Push code to GitHub
2. GitHub Actions will automatically deploy
3. Configure custom domain if needed
4. Test authentication flows