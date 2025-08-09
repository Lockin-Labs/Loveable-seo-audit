import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const AmazonScrapingSubmit = () => {
  const [keywords, setKeywords] = useState("");
  const [maxProducts, setMaxProducts] = useState(50);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Task submitted!", description: `Amazon scraping queued for "${keywords}"` });
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
                <span className="text-sm font-medium">Keywords or ASINs</span>
                <input required value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="e.g., gaming laptop, B08N5WRWNW" className="h-10 rounded-md border bg-background px-3" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">Max products</span>
                <input type="number" min={10} max={2000} value={maxProducts} onChange={(e) => setMaxProducts(parseInt(e.target.value))} className="h-10 rounded-md border bg-background px-3" />
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
