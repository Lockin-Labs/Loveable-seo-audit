// Azure Function API endpoints and utilities

import { Task, TaskResponse, ApiError } from '@/types';

const API_ENDPOINTS = {
  amazon: "/api/amazon_scraper",
  seo: "/api/seo_audit", 
  sheets: "/api/sheets_cleaner",
  tasks: "/api/tasks",
  download: "/api/tasks"
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

// Fetch all tasks for the current user
export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(API_ENDPOINTS.tasks);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

// Get download URL for a specific task
export const getTaskDownloadUrl = async (taskId: string): Promise<string | null> => {
  try {
    const response = await fetch(`${API_ENDPOINTS.download}/${taskId}/download`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.downloadUrl || null;
  } catch (error) {
    console.error('Error fetching download URL:', error);
    return null;
  }
};