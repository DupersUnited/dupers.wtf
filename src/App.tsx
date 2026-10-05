import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import ModsPage from "./pages/Mods";
import DupersUnitedPage from "./pages/DupersUnited";
import { TermsPage, PrivacyPage } from "./pages/Legal";
import { ThemeProvider } from "@/components/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mods" element={<ModsPage />} />
          <Route path="/dupersunited" element={<DupersUnitedPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;