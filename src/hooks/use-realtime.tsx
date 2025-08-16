import { useState, useEffect } from 'react';

interface Task {
  id: string;
  type: string;
  status: 'processing' | 'analyzing' | 'completed' | string;
  createdAt: string;
  link: string;
  progress: number;
}

export function useRealtimeTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(false);
    
    // Simulate real-time updates for demo
    const interval = setInterval(() => {
      // This would be replaced with actual WebSocket or Server-Sent Events
      // For now, just simulate progress updates
      setTasks(prevTasks => 
        prevTasks.map(task => {
          if (task.status === 'processing' && task.progress < 100) {
            const newProgress = Math.min(task.progress + Math.random() * 10, 100);
            const newStatus = newProgress >= 100 ? 'completed' : 
                            newProgress >= 50 ? 'analyzing' : 'processing';
            return { ...task, progress: newProgress, status: newStatus };
          }
          return task;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { tasks, isLoading };
}