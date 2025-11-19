import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  age: number;
  text: string;
  daysClean: number;
}

const testimonials: Testimonial[] = [
  {
    name: "João Silva",
    age: 32,
    text: "Perdi quase tudo antes de perceber que precisava de ajuda. Hoje, 180 dias limpo, reconstruí minha vida e meu relacionamento com minha família. O LivreBet me ajudou a entender que não estava sozinho.",
    daysClean: 180,
  },
  {
    name: "Maria Santos",
    age: 28,
    text: "As apostas eram minha fuga para tudo. Perdi emprego, amigos e dignidade. Mas encontrei esperança aqui. Os versículos e exercícios de respiração salvaram minha vida nos momentos mais difíceis.",
    daysClean: 95,
  },
  {
    name: "Pedro Oliveira",
    age: 41,
    text: "Depois de 15 anos preso nesse vício, achei que nunca conseguiria parar. O quiz me fez enxergar a realidade, e o livro me deu o caminho. Hoje sou livre e ajudo outros a encontrarem essa liberdade.",
    daysClean: 365,
  },
  {
    name: "Ana Costa",
    age: 35,
    text: "Escondi meu vício por 5 anos. Quando finalmente pedi ajuda, já tinha perdido R$ 80 mil. O apoio que encontrei aqui foi fundamental para recomeçar. Cada dia limpo é uma vitória.",
    daysClean: 127,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de Superação</h2>
          <p className="text-muted-foreground">
            Pessoas reais que venceram o vício e reconstruíram suas vidas.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-soft relative">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

          <div className="space-y-6 pt-8">
            <p className="text-lg md:text-xl leading-relaxed italic">{current.text}</p>

            <div className="pt-6 border-t border-border">
              <p className="font-semibold text-lg">{current.name}</p>
              <p className="text-sm text-muted-foreground">
                {current.age} anos • {current.daysClean} dias livre
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button onClick={previous} variant="outline" size="icon">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button onClick={next} variant="outline" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
