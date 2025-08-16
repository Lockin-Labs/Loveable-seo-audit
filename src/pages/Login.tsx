import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { loginWithMsal } from "@/lib/azure-auth";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleMicrosoftLogin = async () => {
    // Try MSAL authentication first
    const account = await loginWithMsal();
    if (account) {
      toast({ title: "Login successful", description: "Welcome back!" });
      navigate("/dashboard");
      return;
    }

    // Fallback to Supabase OAuth
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) {
      toast({ title: "Login failed", description: error.message });
    }
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
