// Marvellous Studio route shell: studio-first navigation across Home, About, Services, Portfolio, Case Studies, and Contact.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AboutPage, CaseStudiesPage, ContactPageV2, HomePage, PortfolioPage, PricingPage, ServicesPage, TestimonialsPage } from "./pages/SitePages";

function Router() {
  return <Switch><Route path="/" component={HomePage} /><Route path="/about" component={AboutPage} /><Route path="/services" component={ServicesPage} /><Route path="/pricing" component={PricingPage} /><Route path="/testimonials" component={TestimonialsPage} /><Route path="/portfolio" component={PortfolioPage} /><Route path="/case-studies" component={CaseStudiesPage} /><Route path="/contact" component={ContactPageV2} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
