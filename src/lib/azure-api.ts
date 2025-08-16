// Azure Function API endpoints and utilities

const API_ENDPOINTS = {
  amazon: "https://seo-audit-func.azurewebsites.net/api/amazon-scraper",
  seo: "https://seo-audit-func.azurewebsites.net/api/seo-audit", 
  sheets: "https://seo-audit-func.azurewebsites.net/api/sheets-cleaner"
};

export const submitTask = async (taskType: 'amazon' | 'seo' | 'sheets', data: any) => {
  const response = await fetch(API_ENDPOINTS[taskType], {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const submitAmazonTask = async (url: string, tier: string) => {
  return submitTask('amazon', { url, tier });
};

export const submitSeoTask = async (url: string, pages: number) => {
  return submitTask('seo', { url, pages });
};

export const submitSheetsTask = async (sheetUrl: string, rows: number) => {
  return submitTask('sheets', { sheetUrl, rows });
};