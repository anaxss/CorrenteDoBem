import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { DonationCategories } from "./components/DonationCategories";
import { DonationSection } from "./components/DonationSection";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";
import { DonationModal } from "./components/DonationModal";

export default function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] =
    useState(false);

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  const handleCloseDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header onDonateClick={handleDonateClick} />
        <HeroSection onDonateClick={handleDonateClick} />
        <AboutSection />
        <DonationCategories onDonateClick={handleDonateClick} />
        <DonationSection onDonateClick={handleDonateClick} />
        <ImpactSection />
        <Footer onDonateClick={handleDonateClick} />
        <DonationModal
          isOpen={isDonationModalOpen}
          onClose={handleCloseDonationModal}
        />
      </div>
    </ThemeProvider>
  );
}