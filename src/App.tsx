import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense, lazy } from "react";
import Layout from "@/components/site/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import SeoAuditSubmit from "./pages/submit/SeoAudit";
import AmazonScrapingSubmit from "./pages/submit/AmazonScraping";
import SheetsCleaningSubmit from "./pages/submit/SheetsCleaning";
import NotFound from "./pages/NotFound";

const MonitoringTest = lazy(() => import('./components/MonitoringTest'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="auth" element={<Auth />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="admin" element={<Admin />} />
                <Route path="submit">
                  <Route path="seo-audit" element={<SeoAuditSubmit />} />
                  <Route path="amazon-scraping" element={<AmazonScrapingSubmit />} />
                  <Route path="sheets-cleaning" element={<SheetsCleaningSubmit />} />
                </Route>
                <Route path="monitoring-test" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <MonitoringTest />
                  </Suspense>
                } />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
