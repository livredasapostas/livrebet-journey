import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertCircle, CheckCircle2, Download } from "lucide-react";
import jsPDF from "jspdf";

interface Question {
  id: number;
  text: string;
  options: { value: number; label: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Com que frequência você pensa em apostas?",
    options: [
      { value: 1, label: "Raramente ou nunca" },
      { value: 2, label: "Algumas vezes por semana" },
      { value: 3, label: "Diariamente ou constantemente" },
    ],
  },
  {
    id: 2,
    text: "Você já tentou parar de apostar e não conseguiu?",
    options: [
      { value: 1, label: "Não, nunca tentei parar" },
      { value: 2, label: "Sim, tentei 1-2 vezes" },
      { value: 3, label: "Sim, tentei várias vezes sem sucesso" },
    ],
  },
  {
    id: 3,
    text: "Apostas já causaram problemas financeiros para você?",
    options: [
      { value: 1, label: "Não, meu orçamento está sob controle" },
      { value: 2, label: "Sim, algumas dificuldades ocasionais" },
      { value: 3, label: "Sim, dívidas significativas e problemas graves" },
    ],
  },
  {
    id: 4,
    text: "Você esconde o quanto aposta de familiares ou amigos?",
    options: [
      { value: 1, label: "Não, sou transparente" },
      { value: 2, label: "Às vezes omito informações" },
      { value: 3, label: "Sim, frequentemente escondo" },
    ],
  },
  {
    id: 5,
    text: "Você sente necessidade de apostar valores cada vez maiores?",
    options: [
      { value: 1, label: "Não" },
      { value: 2, label: "Às vezes" },
      { value: 3, label: "Sim, constantemente" },
    ],
  },
  {
    id: 6,
    text: "Você fica irritado ou ansioso quando não pode apostar?",
    options: [
      { value: 1, label: "Não" },
      { value: 2, label: "Um pouco desconfortável" },
      { value: 3, label: "Muito ansioso ou irritado" },
    ],
  },
  {
    id: 7,
    text: "Já usou apostas para fugir de problemas ou emoções negativas?",
    options: [
      { value: 1, label: "Não" },
      { value: 2, label: "Algumas vezes" },
      { value: 3, label: "Frequentemente" },
    ],
  },
  {
    id: 8,
    text: "Você já perdeu dinheiro que não podia perder em apostas?",
    options: [
      { value: 1, label: "Não" },
      { value: 2, label: "Sim, uma ou duas vezes" },
      { value: 3, label: "Sim, várias vezes" },
    ],
  },
  {
    id: 9,
    text: "Apostas já prejudicaram seus relacionamentos?",
    options: [
      { value: 1, label: "Não" },
      { value: 2, label: "Um pouco" },
      { value: 3, label: "Sim, significativamente" },
    ],
  },
  {
    id: 10,
    text: "Você já mentiu sobre suas apostas?",
    options: [
      { value: 1, label: "Não" },
      { value: 2, label: "Algumas vezes" },
      { value: 3, label: "Frequentemente" },
    ],
  },
];

const verses = {
  low: '"E conhecereis a verdade, e a verdade vos libertará." - João 8:32',
  moderate: '"Tudo posso naquele que me fortalece." - Filipenses 4:13',
  high: '"Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo." - Isaías 41:10',
};

const Quiz = ({ onComplete }: { onComplete: (level: string) => void }) => {
  const [step, setStep] = useState<"info" | "quiz" | "result">("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{ level: string; score: number } | null>(null);

  const handleStartQuiz = () => {
    if (name && email) {
      // Download JSON with user data
      const userData = {
        nome: name,
        email: email,
        data: new Date().toISOString(),
      };
      const blob = new Blob([JSON.stringify(userData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "meus-dados-livrebet.json";
      a.click();
      URL.revokeObjectURL(url);

      setStep("quiz");
    }
  };

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    let level = "";
    let levelText = "";
    let verse = verses.low;

    if (total <= 15) {
      level = "low";
      levelText = "Baixo Risco";
      verse = verses.low;
    } else if (total <= 22) {
      level = "moderate";
      levelText = "Risco Moderado";
      verse = verses.moderate;
    } else {
      level = "high";
      levelText = "Alto Risco";
      verse = verses.high;
    }

    setResult({ level, score: total });
    setStep("result");
    onComplete(level);
  };

  const downloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const levelText = result.level === "low" ? "Baixo Risco" : result.level === "moderate" ? "Risco Moderado" : "Alto Risco";

    doc.setFontSize(20);
    doc.text("LivreBet - Resultado do Quiz", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nome: ${name}`, 20, 40);
    doc.text(`E-mail: ${email}`, 20, 50);
    doc.text(`Data: ${new Date().toLocaleDateString("pt-BR")}`, 20, 60);

    doc.setFontSize(16);
    doc.text(`Nível: ${levelText}`, 20, 80);
    doc.text(`Pontuação: ${result.score}/30`, 20, 90);

    doc.setFontSize(10);
    const verse = result.level === "low" ? verses.low : result.level === "moderate" ? verses.moderate : verses.high;
    doc.text(verse, 20, 110, { maxWidth: 170 });

    doc.save("resultado-quiz-livrebet.pdf");
  };

  if (step === "info") {
    return (
      <section id="quiz" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 shadow-soft">
            <h2 className="text-3xl font-bold text-center mb-6">Quiz de Identificação</h2>
            <p className="text-muted-foreground text-center mb-8">
              Antes de começar, precisamos de algumas informações suas. Seus dados ficam salvos apenas no seu
              dispositivo.
            </p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="mt-2"
                />
              </div>

              <Button
                onClick={handleStartQuiz}
                disabled={!name || !email}
                className="w-full gradient-hope text-white"
              >
                Iniciar Quiz
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  if (step === "quiz") {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <section id="quiz" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 shadow-soft">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-hope transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">{question.text}</h3>

            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) => handleAnswer(parseInt(value))}
            >
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <RadioGroupItem value={option.value.toString()} id={`q${question.id}-${option.value}`} />
                    <Label htmlFor={`q${question.id}-${option.value}`} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex gap-4 mt-8">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline" className="flex-1">
                Anterior
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[question.id]}
                className="flex-1 gradient-hope text-white"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  if (step === "result" && result) {
    const levelConfig = {
      low: {
        color: "text-primary",
        icon: CheckCircle2,
        title: "Baixo Risco",
        description:
          "Você demonstra um padrão controlado em relação às apostas. Continue atento e busque manter hábitos saudáveis.",
      },
      moderate: {
        color: "text-accent",
        icon: AlertCircle,
        title: "Risco Moderado",
        description:
          "Alguns sinais de alerta foram identificados. É importante buscar apoio e desenvolver estratégias de prevenção.",
      },
      high: {
        color: "text-destructive",
        icon: AlertCircle,
        title: "Alto Risco",
        description:
          "Identificamos um padrão preocupante. Buscar ajuda profissional e apoio é fundamental neste momento.",
      },
    };

    const config = levelConfig[result.level as keyof typeof levelConfig];
    const Icon = config.icon;
    const verse = result.level === "low" ? verses.low : result.level === "moderate" ? verses.moderate : verses.high;

    return (
      <section id="quiz" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 shadow-soft text-center">
            <Icon className={`w-16 h-16 mx-auto mb-4 ${config.color}`} />
            <h2 className="text-3xl font-bold mb-2">{config.title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{config.description}</p>

            <div className="p-6 bg-muted/50 rounded-lg mb-6">
              <p className="text-sm italic text-foreground">{verse}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={downloadPDF} variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Baixar PDF
              </Button>
              <Button onClick={() => window.location.reload()} className="flex-1 gradient-hope text-white">
                Fazer Novamente
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return null;
};

export default Quiz;
