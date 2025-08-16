# Azure Static Web Apps Deployment Guide

## Prerequisites
- Azure account
- GitHub repository
- Azure CLI installed

## Deployment Methods

### Method 1: Azure Static Web Apps (Recommended)

#### 1. Create Azure Static Web App
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

### Method 2: Azure Storage Static Website

#### 1. Create Storage Account
```bash
# Create resource group
az group create --name SEOAudit-RG --location "East US"

# Create storage account
az storage account create \
  --name seoauditui \
  --resource-group SEOAudit-RG \
  --sku Standard_LRS \
  --location "East US"
```

#### 2. Build and Upload Files
```bash
# Build the React app
npm run build

# Upload files to storage
az storage blob upload-batch \
  --account-name seoauditui \
  --destination '$web' \
  --source ./dist
```

#### 3. Enable Static Website
```bash
# Enable static website hosting
az storage blob service-properties update \
  --account-name seoauditui \
  --static-website \
  --404-document index.html \
  --index-document index.html
```

## Configuration

### Environment Variables
For Azure Static Web Apps, configure in Azure Portal → Configuration:
```
VITE_SUPABASE_URL=https://veyuattnxbopbdrxyiho.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Supabase Authentication Setup
In Supabase Dashboard → Authentication → URL Configuration:
- **Site URL**: 
  - Static Web Apps: `https://YOUR-APP-NAME.azurestaticapps.net`
  - Storage Account: `https://seoauditui.z13.web.core.windows.net`
- **Redirect URLs**: 
  - `https://YOUR-DOMAIN/dashboard`
  - `https://YOUR-DOMAIN/`

### Azure AD Integration
1. Register app in Azure AD with Client ID: `3c641d65-9a56-4eb3-bc32-6d64389de243`
2. Add redirect URI: `https://YOUR-DOMAIN/auth/callback`
3. Configure in Supabase → Authentication → Providers → Azure

## Backend Services Integration

The app is configured to connect to Azure Functions:
- **Amazon Scraper**: `https://seo-audit-func.azurewebsites.net/api/amazon-scraper`
- **SEO Audit**: `https://seo-audit-func.azurewebsites.net/api/seo-audit`
- **Sheets Cleaner**: `https://seo-audit-func.azurewebsites.net/api/sheets-cleaner`

## Authentication Flow

The app supports dual authentication:
1. **MSAL (Primary)**: Direct Azure AD integration
2. **Supabase OAuth (Fallback)**: Via Supabase Azure provider

## File Structure Ready for Azure
- ✅ `staticwebapp.config.json` - Azure routing config
- ✅ `.github/workflows/azure-static-web-apps.yml` - CI/CD pipeline
- ✅ React app builds to `dist/` folder
- ✅ Supabase integration configured
- ✅ Azure Functions API integration
- ✅ MSAL authentication library

## Next Steps
1. Choose deployment method (Static Web Apps recommended)
2. Push code to GitHub (auto-deploys with Method 1)
3. Configure authentication providers
4. Test API integrations with Azure Functions