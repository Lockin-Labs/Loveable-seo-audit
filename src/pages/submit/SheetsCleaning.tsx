import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const SheetsCleaningSubmit = () => {
  const [sheetUrl, setSheetUrl] = useState("");
  const [rows, setRows] = useState(1000);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Task submitted!", description: `Sheets cleaning queued for ${sheetUrl}` });
  };

  return (
    <>
      <Seo title="Submit Google Sheets Cleaning" description="Automate dedupe, formatting, and validation for your Google Sheets." canonical="/submit/sheets-cleaning" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight">Submit Sheets Cleaning</h1>
        <Card className="mt-6 max-w-2xl">
          <CardHeader>
            <CardTitle>Sheet details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium">Google Sheet URL</span>
                <input required value={sheetUrl} onChange={(e) => setSheetUrl(e.target.value)} placeholder="https://docs.google.com/spreadsheets/d/..." className="h-10 rounded-md border bg-background px-3" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">Approx. rows</span>
                <input type="number" min={100} max={1000000} value={rows} onChange={(e) => setRows(parseInt(e.target.value))} className="h-10 rounded-md border bg-background px-3" />
              </label>
              <Button type="submit" variant="hero">Submit Task</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default SheetsCleaningSubmit;
