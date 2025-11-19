import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

const BubbleGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const bubbleInterval = setInterval(() => {
      const newBubble: Bubble = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 10,
        size: Math.random() * 30 + 40,
      };
      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 2000);
    }, 800);

    return () => clearInterval(bubbleInterval);
  }, [isPlaying]);

  const handleStartGame = () => {
    setIsPlaying(true);
    setBubbles([]);
    setScore(0);
    setTimeLeft(30);
  };

  const popBubble = (id: number) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
    setScore((prev) => prev + 1);
  };

  return (
    <section id="jogo" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Estoura a Ansiedade</h2>
          <p className="text-muted-foreground">
            Um jogo simples para ajudar a aliviar a tensão. Estoure as bolhas o mais rápido que puder!
          </p>
        </div>

        <Card className="p-8 shadow-soft">
          {!isPlaying && timeLeft === 30 ? (
            <div className="text-center space-y-6">
              <p className="text-lg">Clique nas bolhas que aparecerem na tela para estourá-las.</p>
              <Button onClick={handleStartGame} size="lg" className="gradient-hope text-white">
                Começar Jogo
              </Button>
            </div>
          ) : !isPlaying && timeLeft === 0 ? (
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Tempo Esgotado!</h3>
              <p className="text-4xl font-bold text-primary">{score} bolhas</p>
              <p className="text-lg text-muted-foreground">
                {score >= 30
                  ? "Incrível! Você tem reflexos rápidos!"
                  : score >= 20
                  ? "Muito bem! Continue assim!"
                  : "Que tal tentar de novo?"}
              </p>
              <Button onClick={handleStartGame} className="gradient-hope text-white">
                Jogar Novamente
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-semibold">
                  Pontos: <span className="text-primary">{score}</span>
                </div>
                <div className="text-lg font-semibold">
                  Tempo: <span className="text-secondary">{timeLeft}s</span>
                </div>
              </div>

              <div className="relative w-full h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg overflow-hidden">
                {bubbles.map((bubble) => (
                  <button
                    key={bubble.id}
                    onClick={() => popBubble(bubble.id)}
                    className="absolute rounded-full gradient-calm opacity-70 hover:opacity-100 transition-all cursor-pointer animate-pulse"
                    style={{
                      left: `${bubble.x}%`,
                      top: `${bubble.y}%`,
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default BubbleGame;
