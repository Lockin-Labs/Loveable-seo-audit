import { Seo } from "@/components/site/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockTasks = [
  { id: "T-1001", type: "SEO Audit", status: "Completed", createdAt: "2025-08-01", link: "#" },
  { id: "T-1002", type: "Amazon Scraping", status: "Processing", createdAt: "2025-08-02", link: "#" },
  { id: "T-1003", type: "Sheets Cleaning", status: "Queued", createdAt: "2025-08-03", link: "#" },
];

const StatusPill = ({ status }: { status: string }) => {
  const map: Record<string, string> = {
    Completed: "bg-primary/10 text-primary",
    Processing: "bg-accent text-accent-foreground",
    Queued: "bg-muted text-muted-foreground",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${map[status] || "bg-muted text-muted-foreground"}`}>
      {status}
    </span>
  );
};

const Dashboard = () => {
  return (
    <>
      <Seo title="Dashboard - SEO Audit & Data Services" description="View your task history, statuses, and download completed reports." canonical="/dashboard" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight">Your Tasks</h1>
        <p className="text-muted-foreground mt-2">History and downloads</p>

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
                  {mockTasks.map((t) => (
                    <tr key={t.id} className="border-t">
                      <td className="py-3 pr-4 font-medium">{t.id}</td>
                      <td className="py-3 pr-4">{t.type}</td>
                      <td className="py-3 pr-4"><StatusPill status={t.status} /></td>
                      <td className="py-3 pr-4">{t.createdAt}</td>
                      <td className="py-3 pr-4"><a className="text-primary hover:underline" href={t.link}>Report</a></td>
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
