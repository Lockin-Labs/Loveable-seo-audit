import heroImage from "@/assets/hero-azure.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/site/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="SEO Audit & Data Services – Automate Audits, Scraping, and Cleaning"
        description="Instant SEO audits, Amazon price scraping, and Google Sheets cleaning. Transparent pricing, fast delivery, and professional reports."
        canonical="/"
      />
      <section className="relative overflow-hidden">
        <div className="container grid gap-8 py-20 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight animate-header text-shadow-hero">
              Automate SEO Audits, Amazon Scraping, and Sheets Cleaning
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Professional insights and clean data in minutes. Choose a tier that fits your workflow or subscribe for continuous monitoring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/pricing"><Button variant="hero" size="lg">View Pricing</Button></a>
              <a href="/submit/seo-audit"><Button size="lg">Try SEO Demo</Button></a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-40 blur-2xl" />
            <iframe 
              src="https://tavus.video/180b684f60" 
              className="w-full aspect-video rounded-xl border shadow-elevated"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Data automation demo video"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>SEO Meta Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Instant checks for meta, schema, speed, and competitors.</p>
              <a href="/submit/seo-audit" className="inline-block mt-4"><Button variant="soft">Start audit</Button></a>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Amazon Price Scraping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Real-time prices, titles, images, reviews, and competitors.</p>
              <a href="/submit/amazon-scraping" className="inline-block mt-4"><Button variant="soft">Start scraping</Button></a>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Google Sheets Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Dedupe, format, validate, and automate with AI suggestions.</p>
              <a href="/submit/sheets-cleaning" className="inline-block mt-4"><Button variant="soft">Clean a sheet</Button></a>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Index;
