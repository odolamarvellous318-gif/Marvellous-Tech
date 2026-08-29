// Marvellous Studio route shell: studio-first navigation across Home, About, Services, Portfolio, Case Studies, and Contact.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HomePage } from "./pages/SitePages";

function Router() {
  return <Switch><Route path="/" component={HomePage} /><Route component={HomePage} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
