import { Seo } from "@/components/site/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", tasks: 24, revenue: 120 },
  { name: "Tue", tasks: 36, revenue: 190 },
  { name: "Wed", tasks: 42, revenue: 220 },
  { name: "Thu", tasks: 31, revenue: 170 },
  { name: "Fri", tasks: 58, revenue: 340 },
  { name: "Sat", tasks: 44, revenue: 260 },
  { name: "Sun", tasks: 29, revenue: 150 },
];

const HealthRow = ({ label, status }: { label: string; status: "ok" | "warn" | "down" }) => {
  const map: Record<string, string> = {
    ok: "bg-green-100 text-green-700",
    warn: "bg-amber-100 text-amber-800",
    down: "bg-red-100 text-red-700",
  };
  const text = { ok: "Operational", warn: "Degraded", down: "Down" }[status];
  return (
    <div className="flex items-center justify-between border-b py-2 last:border-b-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${map[status]}`}>{text}</span>
    </div>
  );
};

const Admin = () => {
  return (
    <>
      <Seo title="Admin Dashboard - SEO Audit & Data Services" description="Real-time task metrics, revenue reports, user management, and system health checks." canonical="/admin" />
      <section className="container py-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Real-time metrics and system health</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Active Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold">128</div>
            </CardContent>
          </Card>
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Revenue (MTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold">$4,820</div>
            </CardContent>
          </Card>
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Avg. Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold">18m</div>
            </CardContent>
          </Card>
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Errors (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-amber-600">7</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Tasks & Revenue</CardTitle>
            </CardHeader>
            <CardContent style={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="tasks" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="hsl(210 10% 40%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <HealthRow label="API Gateway" status="ok" />
              <HealthRow label="Worker Queue" status="ok" />
              <HealthRow label="Crawler Pool" status="warn" />
              <HealthRow label="Storage" status="ok" />
              <HealthRow label="Payments" status="ok" />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Admin;
