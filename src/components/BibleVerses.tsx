import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

interface Verse {
  text: string;
  reference: string;
  affirmation: string;
}

const verses: Verse[] = [
  {
    text: "E conhecereis a verdade, e a verdade vos libertará.",
    reference: "João 8:32",
    affirmation: "Eu escolho viver na verdade e na liberdade.",
  },
  {
    text: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
    affirmation: "Eu tenho força em Cristo para vencer qualquer desafio.",
  },
  {
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo.",
    reference: "Isaías 41:10",
    affirmation: "Deus está comigo e me fortalece a cada dia.",
  },
  {
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    reference: "Salmo 46:1",
    affirmation: "Encontro minha força e segurança em Deus.",
  },
  {
    text: "Os justos clamam, e o Senhor os ouve; e os livra de todas as suas angústias.",
    reference: "Salmo 34:17",
    affirmation: "Deus ouve minhas orações e me liberta.",
  },
  {
    text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    reference: "Mateus 11:28",
    affirmation: "Entrego minhas cargas a Jesus e encontro descanso.",
  },
];

const BibleVerses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextVerse = () => {
    setCurrentIndex((prev) => (prev + 1) % verses.length);
  };

  const currentVerse = verses[currentIndex];

  return (
    <section id="versiculos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Afirmações de Cura</h2>
          <p className="text-muted-foreground">
            Palavras de esperança e força para fortalecer sua jornada.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-soft text-center space-y-6 fade-in">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
              "{currentVerse.text}"
            </p>
            <p className="text-primary font-semibold">— {currentVerse.reference}</p>
          </div>

          <div className="h-px bg-border my-8" />

          <div className="bg-primary/5 p-6 rounded-lg">
            <p className="text-lg font-medium text-primary">{currentVerse.affirmation}</p>
          </div>

          <Button onClick={showNextVerse} variant="outline" className="mt-6">
            <RefreshCw className="w-4 h-4 mr-2" />
            Mostrar Outro Versículo
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default BibleVerses;
