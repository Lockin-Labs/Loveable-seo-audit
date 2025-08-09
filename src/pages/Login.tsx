import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";

const Login = () => {
  const handleMicrosoftLogin = () => {
    // Placeholder for Azure AD auth integration
    window.location.href = "/auth/microsoft";
  };

  return (
    <>
      <Seo title="Login - SEO Audit & Data Services" description="Sign in with Microsoft Azure AD to access your dashboard and tasks." canonical="/login" />
      <section className="container py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Sign in</h1>
        <p className="mt-2 text-muted-foreground">Use your Microsoft account to continue.</p>
        <div className="mt-8 flex justify-center">
          <Button variant="hero" size="lg" onClick={handleMicrosoftLogin}>
            Sign in with Microsoft
          </Button>
        </div>
      </section>
    </>
  );
};

export default Login;
