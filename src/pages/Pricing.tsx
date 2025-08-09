import { Seo } from "@/components/site/Seo";
import { TierCarousel } from "@/components/pricing/TierCarousel";

const Pricing = () => {
  const seoTiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "3 pages analysis",
        "Basic meta tags check",
        "Basic validation for structured data",
        "Top 3 keywords analysis",
        "Basic readability score",
        "Basic HTML report",
        "Community forum support",
        "72-hour delivery",
      ],
      href: "/submit/seo-audit",
    },
    {
      name: "Basic",
      price: "$7",
      features: [
        "10 pages analysis",
        "Basic meta tags analysis",
        "Basic schema validation",
        "Desktop-only page speed audit",
        "Top 5 keywords analysis",
        "Readability score",
        "PDF report",
        "Email support (72h response)",
        "24-hour delivery",
      ],
      href: "/submit/seo-audit",
    },
    {
      name: "Premium",
      price: "$18",
      popular: true,
      features: [
        "25 pages analysis",
        "Backlinks + Content analysis",
        "Advanced schema suggestions",
        "Desktop + Mobile page speed audit",
        "Top 20 keywords + TF-IDF scoring",
        "Plagiarism check (1,000 words)",
        "Top 100 backlinks analysis",
        "3 competitors benchmarking",
        "PDF + CSV reports",
        "Email support (24h response)",
        "2-hour delivery",
      ],
      href: "/submit/seo-audit",
    },
    {
      name: "Enterprise",
      price: "$50",
      features: [
        "100+ pages analysis",
        "Full technical audit + PDF report",
        "Full schema audit",
        "Desktop + Mobile + Core Web Vitals audit",
        "Top 50 keywords + competitor analysis",
        "Content optimization suggestions",
        "Full backlink profile",
        "5 competitors benchmarking",
        "Weekly scheduled audits",
        "PDF + CSV + detailed insights reports",
        "Live chat support (24h response)",
        "6-hour delivery",
      ],
      href: "/submit/seo-audit",
    },
    {
      name: "Subscription",
      price: "$40/mo",
      features: [
        "10 audits per month",
        "Monthly monitoring",
        "Unlimited pages + API access",
        "Desktop/Mobile + Video page speed audit",
        "Auto-fix recommendations for structured data",
        "Competitor keyword gaps analysis",
        "AI rewrite suggestions",
        "Full backlink profile + spam detection",
        "10 competitors + trend tracking",
        "Daily + custom triggers for scheduled audits",
        "PDF/CSV/API + Power BI integration",
        "Dedicated account manager",
        "Recurring delivery",
      ],
      href: "/submit/seo-audit",
    },
  ];

  const amazonTiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "10 products",
        "Price data only",
        "CSV format",
        "Community forum support",
        "72-hour delivery",
      ],
      href: "/submit/amazon-scraping",
    },
    {
      name: "Basic",
      price: "$5",
      features: [
        "50 products",
        "Price data + Product titles",
        "CSV format",
        "Email support (48h response)",
        "24-hour delivery",
      ],
      href: "/submit/amazon-scraping",
    },
    {
      name: "Premium",
      price: "$15",
      popular: true,
      features: [
        "500 products",
        "Ratings, Images, Competitors",
        "Price data + Product titles + Product images",
        "Ratings & Reviews + Stock status",
        "Competitor analysis",
        "CSV + Excel formats",
        "Email support (24h response)",
        "1-hour delivery",
      ],
      href: "/submit/amazon-scraping",
    },
    {
      name: "Ultra",
      price: "$25",
      features: [
        "1000+ products",
        "Real-time pricing + API access",
        "All Premium features plus:",
        "Price history tracking",
        "Real-time updates",
        "API access",
        "CSV + Excel + JSON formats",
        "Live chat support",
        "5-minute delivery",
      ],
      href: "/submit/amazon-scraping",
    },
    {
      name: "Subscription",
      price: "$40/mo",
      features: [
        "10 tasks per month",
        "Unlimited products",
        "All Ultra features plus:",
        "Priority support",
        "All formats + API access",
        "Instant delivery",
        "Recurring service",
      ],
      href: "/submit/amazon-scraping",
    },
  ];

  const sheetsTiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "1 sheet (100 rows max)",
        "Basic cleanup",
        "Duplicate removal",
        "Basic data formatting",
        "One-time processing",
        "Community forum support",
        "72-hour delivery",
      ],
      href: "/submit/sheets-cleaning",
    },
    {
      name: "Basic",
      price: "$5",
      features: [
        "1 sheet (1000 rows)",
        "Dedupe + formatting",
        "Duplicate removal + Data formatting",
        "Data validation",
        "One-time processing",
        "Email support (48h response)",
        "24-hour delivery",
      ],
      href: "/submit/sheets-cleaning",
    },
    {
      name: "Premium",
      price: "$15",
      popular: true,
      features: [
        "5 sheets (10,000 rows each)",
        "AI suggestions + formulas",
        "All Basic features plus:",
        "AI suggestions",
        "Formula creation",
        "Conditional formatting",
        "One-time processing",
        "Email support (24h response)",
        "1-hour delivery",
      ],
      href: "/submit/sheets-cleaning",
    },
    {
      name: "Complex",
      price: "$30",
      features: [
        "20+ sheets (unlimited rows)",
        "VBA scripting + automation",
        "All Premium features plus:",
        "VBA scripting",
        "Automation setup",
        "API integration",
        "One-time processing",
        "Live chat support",
        "3-hour delivery",
      ],
      href: "/submit/sheets-cleaning",
    },
    {
      name: "Subscription",
      price: "$40/mo",
      features: [
        "10 tasks per month",
        "Unlimited sheets and rows",
        "Continuous sync",
        "All Complex features plus:",
        "Continuous sync",
        "API integration",
        "Priority support",
        "Real-time delivery",
        "Recurring service",
      ],
      href: "/submit/sheets-cleaning",
    },
  ];

  return (
    <>
      <Seo
        title="SEO Audit & Data Services - Pricing Guide"
        description="Transparent pricing for SEO audits, Amazon price scraping, and Google Sheets cleaning. Choose Free, Basic, Premium, Enterprise/Ultra/Complex, or Subscription tiers."
        canonical="/pricing"
      />
      <section className="container py-12">
        <h1 className="text-4xl font-bold tracking-tight">Pricing Guide</h1>
        <p className="mt-2 text-muted-foreground">
          Choose a plan that fits your needs. Upgrade anytime.
        </p>
      </section>

      <TierCarousel title="SEO Meta Audit Service" items={seoTiers} />
      <TierCarousel title="Amazon Price Scraping Service" items={amazonTiers} />
      <TierCarousel title="Google Sheets Cleaning Service" items={sheetsTiers} />
    </>
  );
};

export default Pricing;
