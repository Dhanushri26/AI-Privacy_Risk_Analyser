import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./layout/Topbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import UploadPage from "./pages/UploadPage";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analyze" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;