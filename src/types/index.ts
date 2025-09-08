export interface Task {
  id: string;
  type: 'seo_audit' | 'amazon_scraper' | 'sheets_cleaner';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  link?: string;
  downloadUrl?: string;
  progress?: number;
  result?: any;
  error?: string;
  // Task-specific data
  url?: string; // For SEO audit
  urls?: string[]; // For Amazon scraper
  tier: string;
  userId?: string;
}

export interface TaskResponse {
  taskId: string;
  status: string;
  result?: any;
  downloadUrl?: string;
  estimatedCompletion?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}