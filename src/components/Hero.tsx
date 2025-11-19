import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToQuiz = () => {
    const element = document.getElementById("quiz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Um Lugar Seguro Para{" "}
              <span className="gradient-hope bg-clip-text text-transparent">Recomeçar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Você não está sozinho nessa jornada. Aqui você encontra apoio, esperança e ferramentas
              práticas para vencer o vício em apostas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-all">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ambiente Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Sem gatilhos, sem julgamentos. Apenas apoio e compreensão.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-all">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Apoio Emocional</h3>
              <p className="text-sm text-muted-foreground">
                Ferramentas práticas para gerenciar ansiedade e emoções.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-all">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Força Espiritual</h3>
              <p className="text-sm text-muted-foreground">
                Versículos e mensagens de esperança para fortalecer sua fé.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Button
              onClick={scrollToQuiz}
              size="lg"
              className="gradient-hope text-white hover:opacity-90 text-lg px-8 py-6 shadow-glow"
            >
              Começar pelo Quiz
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Todos os seus dados ficam salvos apenas no seu dispositivo. Privacidade garantida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
