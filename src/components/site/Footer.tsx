const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p>
            © {new Date().getFullYear()} SEO Audit & Data Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/pricing" className="hover:text-primary">Pricing</a>
            <a href="/contact" className="hover:text-primary">Contact</a>
            <a href="/login" className="hover:text-primary">Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
