import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

const queryClient = new QueryClient();

// Tracker Component to handle email notifications
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // --- CONFIGURATION ---
    // 1. Go to https://www.emailjs.com/, sign up (free).
    // 2. Add a Service (e.g., Gmail). Get the 'Service ID'.
    // 3. Create an Email Template. Get the 'Template ID'.
    //    - Template variables to use: {{visitor_name}}, {{time}}, {{url}}
    // 4. Go to Account > API Keys. Get the 'Public Key'.

    const SERVICE_ID = "service_hnff0ar";   // e.g. "service_x820..."
    const TEMPLATE_ID = "template_mrbr945";
    const PUBLIC_KEY = "k1-eZ7GdVyRGsIxJC";   // e.g. "user_..."

    // Checking for specific person via URL param, e.g. gentle-echoes/?for=HerName
    const searchParams = new URLSearchParams(window.location.search);
    const recipient = searchParams.get('for') || 'Someone';

    // Key to prevent multiple emails for the same session/person
    // Change 'view_notified_' to something else if you want to reset tracking
    const storageKey = `view_notified_${recipient}`;
    const hasNotified = localStorage.getItem(storageKey);

    if (!hasNotified) {
      console.log(`Sending notification for: ${recipient}`);

      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        visitor_name: recipient,
        time: new Date().toLocaleString(),
        url: window.location.href
      }, PUBLIC_KEY)
        .then(() => {
          console.log("Notification sent successfully!");
          localStorage.setItem(storageKey, 'true');
        })
        .catch((error) => console.error("Tracking failed:", error));
    }
  }, [location]); // Runs once on mount (or route change if needed, but [] is safer for 'open' tracking)

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/gentle-echoes">
        <PageTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
