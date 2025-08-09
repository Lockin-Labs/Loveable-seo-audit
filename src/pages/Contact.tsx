import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Seo title="Contact - SEO Audit & Data Services" description="Get in touch for pricing, demos, and support for SEO audits, Amazon scraping, and Sheets cleaning." canonical="/contact" />
      <section className="container py-16">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Questions about plans, features, or enterprise needs? We're here to help.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Sales & Demos</h2>
            <p className="mt-2 text-muted-foreground">Schedule a demo to see sample reports and flows.</p>
            <a href="mailto:sales@example.com">
              <Button className="mt-4" variant="hero">Email sales</Button>
            </a>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Support</h2>
            <p className="mt-2 text-muted-foreground">Need help getting started? We're one message away.</p>
            <a href="mailto:support@example.com">
              <Button className="mt-4">Contact support</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
