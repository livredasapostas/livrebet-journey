import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Header = () => {
  const [daysClean, setDaysClean] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDateDialog, setShowDateDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const savedDate = localStorage.getItem("cleanDate");
    if (savedDate) {
      calculateDays(savedDate);
    }
  }, []);

  const calculateDays = (dateString: string) => {
    const cleanDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - cleanDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysClean(diffDays);
  };

  const handleStartJourney = () => {
    if (selectedDate) {
      localStorage.setItem("cleanDate", selectedDate);
      calculateDays(selectedDate);
      setShowDateDialog(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold gradient-hope bg-clip-text text-transparent">
              LivreBet
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("quiz")} className="text-foreground hover:text-primary transition-colors">
              Quiz
            </button>
            <button onClick={() => scrollToSection("jogo")} className="text-foreground hover:text-primary transition-colors">
              Anti-Ansiedade
            </button>
            <button onClick={() => scrollToSection("respire")} className="text-foreground hover:text-primary transition-colors">
              Respire
            </button>
            <button onClick={() => scrollToSection("versiculos")} className="text-foreground hover:text-primary transition-colors">
              Versículos
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("ajuda")} className="text-foreground hover:text-primary transition-colors">
              Ajuda
            </button>
            <button onClick={() => scrollToSection("livro")} className="text-foreground hover:text-primary transition-colors">
              Livro
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {daysClean > 0 && (
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">{daysClean} dias limpo</span>
              </div>
            )}

            <Dialog open={showDateDialog} onOpenChange={setShowDateDialog}>
              <DialogTrigger asChild>
                <Button className="hidden md:flex gradient-hope text-white hover:opacity-90">
                  Iniciar Jornada
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Quando você parou de apostar?</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="cleanDate">Selecione a data</Label>
                    <Input
                      id="cleanDate"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      max={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <Button onClick={handleStartJourney} className="w-full gradient-hope text-white">
                    Começar Contagem
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quiz")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Quiz
            </button>
            <button
              onClick={() => scrollToSection("jogo")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Anti-Ansiedade
            </button>
            <button
              onClick={() => scrollToSection("respire")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Respire
            </button>
            <button
              onClick={() => scrollToSection("versiculos")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Versículos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("ajuda")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Ajuda
            </button>
            <button
              onClick={() => scrollToSection("livro")}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
            >
              Livro
            </button>
            {daysClean > 0 && (
              <div className="flex items-center gap-2 py-2 px-4 bg-primary/10 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">{daysClean} dias limpo</span>
              </div>
            )}
            <Button
              onClick={() => setShowDateDialog(true)}
              className="gradient-hope text-white hover:opacity-90"
            >
              Iniciar Jornada
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
