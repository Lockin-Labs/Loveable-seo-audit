import { useState, useEffect } from 'react';
import { getTasks, getTaskDownloadUrl } from "@/lib/azure-api";
import { Task } from '@/types';

export const useRealtimeTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const fetchedTasks = await getTasks();
        
        // For completed tasks, fetch download URLs
        const tasksWithDownloadUrls = await Promise.all(
          fetchedTasks.map(async (task) => {
            if (task.status === 'completed') {
              try {
                const downloadUrl = await getTaskDownloadUrl(task.id);
                return { ...task, downloadUrl };
              } catch (error) {
                console.error(`Failed to fetch download URL for task ${task.id}:`, error);
                return task;
              }
            }
            return task;
          })
        );
        
        setTasks(tasksWithDownloadUrls);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
        // Keep tasks as empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();

    // Set up polling for real-time updates every 30 seconds
    const interval = setInterval(fetchTasks, 30000);

    return () => clearInterval(interval);
  }, []);

  return { tasks, isLoading };
};