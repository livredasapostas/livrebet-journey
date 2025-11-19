import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [cycleCount, setCycleCount] = useState(0);
  const [totalCycles, setTotalCycles] = useState(0);
  const [phaseTime, setPhaseTime] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("breathingCycles");
    if (saved) {
      setTotalCycles(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const phases = [
      { name: "inhale" as const, duration: 4000, text: "Inspire" },
      { name: "hold" as const, duration: 4000, text: "Segure" },
      { name: "exhale" as const, duration: 6000, text: "Expire" },
    ];

    let currentPhaseIndex = 0;
    let currentCycle = 0;

    const runPhase = () => {
      if (currentCycle >= 5) {
        setIsActive(false);
        const newTotal = totalCycles + 5;
        setTotalCycles(newTotal);
        localStorage.setItem("breathingCycles", newTotal.toString());
        return;
      }

      const currentPhase = phases[currentPhaseIndex];
      setPhase(currentPhase.name);
      setPhaseTime(currentPhase.duration / 1000);

      const countdown = setInterval(() => {
        setPhaseTime((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimeout(() => {
        clearInterval(countdown);
        currentPhaseIndex++;
        if (currentPhaseIndex >= phases.length) {
          currentPhaseIndex = 0;
          currentCycle++;
          setCycleCount(currentCycle);
        }
        runPhase();
      }, currentPhase.duration);
    };

    runPhase();

    return () => setIsActive(false);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setCycleCount(0);
    setPhase("inhale");
  };

  const getPhaseText = () => {
    if (phase === "inhale") return "Inspire profundamente";
    if (phase === "hold") return "Segure o ar";
    return "Expire lentamente";
  };

  const getScale = () => {
    if (phase === "inhale") return "scale-150";
    if (phase === "hold") return "scale-150";
    return "scale-100";
  };

  return (
    <section id="respire" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Respire Comigo</h2>
          <p className="text-muted-foreground">
            Exercício de respiração guiada para acalmar a mente e reduzir a ansiedade.
          </p>
        </div>

        <Card className="p-8 shadow-soft">
          <div className="text-center space-y-8">
            {!isActive ? (
              <>
                <div className="space-y-4">
                  <p className="text-lg">
                    Encontre um lugar confortável e prepare-se para 5 ciclos de respiração profunda.
                  </p>
                  {totalCycles > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Você já completou {totalCycles} ciclos de respiração! 🌟
                    </p>
                  )}
                </div>
                <Button onClick={handleStart} size="lg" className="gradient-calm text-white">
                  Iniciar Exercício
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <p className="text-2xl font-semibold">{getPhaseText()}</p>
                  <p className="text-lg text-muted-foreground">{phaseTime}s</p>
                  <p className="text-sm text-muted-foreground">
                    Ciclo {cycleCount + 1} de 5
                  </p>
                </div>

                <div className="flex items-center justify-center py-12">
                  <div
                    className={`w-32 h-32 rounded-full gradient-calm transition-all duration-[4000ms] ${getScale()}`}
                  />
                </div>

                <p className="text-sm text-muted-foreground italic">
                  "Inspire paz, expire ansiedade"
                </p>
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BreathingExercise;
