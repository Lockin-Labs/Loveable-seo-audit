import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { submitSeoTask } from "@/lib/azure-api";

const SeoAuditSubmit = () => {
  const [url, setUrl] = useState("");
  const [pages, setPages] = useState(3);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitSeoTask(url, pages);
      toast({ title: "Task submitted!", description: `SEO audit queued for ${url}` });
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit task. Please try again." });
    }
  };

  return (
    <>
      <Seo title="Submit SEO Audit" description="Start an SEO meta audit with instant processing and clear reports." canonical="/submit/seo-audit" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight">Submit SEO Audit</h1>
        <Card className="mt-6 max-w-2xl">
          <CardHeader>
            <CardTitle>Site details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium">Site URL</span>
                <input required value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" className="h-10 rounded-md border bg-background px-3" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">Pages to analyze</span>
                <input type="number" min={1} max={500} value={pages} onChange={(e) => setPages(parseInt(e.target.value))} className="h-10 rounded-md border bg-background px-3" />
              </label>
              <Button type="submit" variant="hero">Submit Task</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default SeoAuditSubmit;
