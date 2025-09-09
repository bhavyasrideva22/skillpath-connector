import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AssessmentIntro from "./pages/AssessmentIntro";
import PsychometricAssessment from "./pages/PsychometricAssessment";
import TechnicalAssessment from "./pages/TechnicalAssessment";
import WiscarAssessment from "./pages/WiscarAssessment";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessment/intro" element={<AssessmentIntro />} />
          <Route path="/assessment/psychometric" element={<PsychometricAssessment />} />
          <Route path="/assessment/technical" element={<TechnicalAssessment />} />
          <Route path="/assessment/wiscar" element={<WiscarAssessment />} />
          <Route path="/assessment/results" element={<Results />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
