import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { submitAmazonTask } from "@/lib/azure-api";

const AmazonScrapingSubmit = () => {
  const [url, setUrl] = useState("");
  const [tier, setTier] = useState<"Basic ($5)" | "Premium ($15)">("Basic ($5)");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitAmazonTask(url, tier);
      toast({ title: "Task submitted!", description: `Amazon scraping queued for ${url} – ${tier}` });
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit task. Please try again." });
    }
  };

  return (
    <>
      <Seo title="Submit Amazon Price Scraping" description="Launch an Amazon scraping task with product titles, prices, and more." canonical="/submit/amazon-scraping" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight">Submit Amazon Scraping</h1>
        <Card className="mt-6 max-w-2xl">
          <CardHeader>
            <CardTitle>Task details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium">Amazon Product URL</span>
                <input
                  required
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.amazon.com/..."
                  className="h-10 rounded-md border bg-background px-3"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">Tier</span>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value as "Basic ($5)" | "Premium ($15)")}
                  className="h-10 rounded-md border bg-background px-3"
                >
                  <option>Basic ($5)</option>
                  <option>Premium ($15)</option>
                </select>
              </label>
              <Button type="submit" variant="hero">Submit Task</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default AmazonScrapingSubmit;
