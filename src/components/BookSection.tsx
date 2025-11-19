import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Download, ShoppingCart } from "lucide-react";

const BookSection = () => {
  return (
    <section id="livro" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Card className="overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-[3/4] bg-gradient-to-br from-primary to-primary-dark rounded-lg shadow-glow flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <BookOpen className="w-16 h-16 mx-auto mb-6" />
                  <p className="text-3xl font-bold mb-4">Livre das Apostas</p>
                  <p className="text-lg opacity-90">Uma História de Redenção</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Conheça o Livro</h2>
                <p className="text-xl text-primary font-semibold mb-4">
                  Livre das Apostas – Uma História de Redenção
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meu relato real e um guia transformador para vencer o vício em apostas.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg">O que você vai encontrar:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Entenda como o vício em apostas funciona no cérebro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Identifique e combata seus gatilhos emocionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Estratégias práticas para reconstruir sua vida financeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Apoio espiritual com versículos e reflexões</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Como reconquistar a confiança de quem você ama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Exercícios práticos para cada etapa da recuperação</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-primary">R$ 19,90</span>
                  <span className="text-lg text-muted-foreground line-through">R$ 39,90</span>
                  <span className="text-sm font-semibold text-accent">50% OFF</span>
                </div>
                <p className="text-xs text-muted-foreground">Oferta especial por tempo limitado</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() =>
                    window.open("https://pay.hotmart.com/K99480183N?off=1pvjm7kd", "_blank")
                  }
                  className="flex-1 gradient-hope text-white hover:opacity-90"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar o eBook
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Primeiro Capítulo
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BookSection;
