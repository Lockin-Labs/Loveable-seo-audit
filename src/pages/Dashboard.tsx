import { Seo } from "@/components/site/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { useRealtimeTasks } from "@/hooks/use-realtime";

const mockTasks = [
  { id: "T-1001", type: "SEO Audit", status: "completed", createdAt: "2025-08-01", link: "#", progress: 100 },
  { id: "T-1002", type: "Amazon Scraping", status: "analyzing", createdAt: "2025-08-02", link: "#", progress: 65 },
  { id: "T-1003", type: "Sheets Cleaning", status: "processing", createdAt: "2025-08-03", link: "#", progress: 25 },
];

const StatusDisplay = ({ status, progress }: { status: string; progress: number }) => {
  return (
    <div className="flex items-center gap-3">
      <StatusIndicator status={status} />
      <div className="flex flex-col">
        <span className="text-sm font-medium capitalize">{status}</span>
        <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground">{progress}%</span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { tasks, isLoading } = useRealtimeTasks();
  const displayTasks = tasks.length > 0 ? tasks : mockTasks;

  return (
    <>
      <Seo title="Dashboard - SEO Audit & Data Services" description="View your task history, statuses, and download completed reports." canonical="/dashboard" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight">Your Tasks</h1>
        <p className="text-muted-foreground mt-2">Live updates • History and downloads</p>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Task history</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground">
                    <th className="py-2 pr-4">ID</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Created</th>
                    <th className="py-2 pr-4">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {displayTasks.map((t) => (
                    <tr key={t.id} className="border-t">
                      <td className="py-3 pr-4 font-medium">{t.id}</td>
                      <td className="py-3 pr-4">{t.type}</td>
                      <td className="py-3 pr-4">
                        <StatusDisplay status={t.status} progress={t.progress} />
                      </td>
                      <td className="py-3 pr-4">{t.createdAt}</td>
                      <td className="py-3 pr-4">
                        {t.status === 'completed' ? (
                          <a className="text-primary hover:underline" href={t.link}>Download</a>
                        ) : (
                          <span className="text-muted-foreground">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Dashboard;
