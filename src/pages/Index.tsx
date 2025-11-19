import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quiz from "@/components/Quiz";
import EbookModal from "@/components/EbookModal";
import BubbleGame from "@/components/BubbleGame";
import BreathingExercise from "@/components/BreathingExercise";
import BibleVerses from "@/components/BibleVerses";
import Testimonials from "@/components/Testimonials";
import Help from "@/components/Help";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showEbookModal, setShowEbookModal] = useState(false);

  const handleQuizComplete = (level: string) => {
    if (level === "moderate" || level === "high") {
      setTimeout(() => {
        setShowEbookModal(true);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Quiz onComplete={handleQuizComplete} />
      <BubbleGame />
      <BreathingExercise />
      <BibleVerses />
      <Testimonials />
      <Help />
      <BookSection />
      <Footer />
      <EbookModal isOpen={showEbookModal} onClose={() => setShowEbookModal(false)} />
    </div>
  );
};

export default Index;
