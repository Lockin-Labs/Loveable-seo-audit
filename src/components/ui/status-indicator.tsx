interface StatusIndicatorProps {
  status: 'processing' | 'analyzing' | 'completed' | string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusIndicator({ status, size = 'md' }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5'
  };

  return (
    <div className={`flex gap-1 ${sizeClasses[size]}`}>
      <div 
        className={`w-full h-full rounded-full transition-all duration-300 ${
          status === 'processing' ? 'bg-status-processing animate-pulse' : 'bg-muted'
        }`}
      />
      <div 
        className={`w-full h-full rounded-full transition-all duration-300 ${
          status === 'analyzing' ? 'bg-status-analyzing animate-pulse' : 'bg-muted'
        }`}
      />
      <div 
        className={`w-full h-full rounded-full transition-all duration-300 ${
          status === 'completed' ? 'bg-status-completed' : 'bg-muted'
        }`}
      />
    </div>
  );
}