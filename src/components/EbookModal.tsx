import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download, ShoppingCart } from "lucide-react";

interface EbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EbookModal = ({ isOpen, onClose }: EbookModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="flex items-center justify-center bg-muted/30 rounded-lg p-6">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-primary to-primary-dark rounded-lg shadow-glow flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-2xl font-bold mb-4">Livre das Apostas</p>
                <p className="text-sm opacity-90">Uma História de Redenção</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Livre das Apostas</h3>
              <p className="text-lg text-muted-foreground mb-4">Uma História de Redenção</p>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">R$ 19,90</span>
                <span className="text-lg text-muted-foreground line-through">R$ 39,90</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Um guia direto, espiritual e prático para vencer o vício em apostas. Em 8 capítulos, você
                entenderá o mecanismo do vício, aprenderá a lidar com os gatilhos e encontrará força para
                recomeçar.
              </p>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-xs font-semibold mb-2">O que você vai aprender:</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Como o vício se forma no cérebro</li>
                  <li>• Estratégias para lidar com gatilhos</li>
                  <li>• Reconstrução financeira e emocional</li>
                  <li>• Apoio espiritual e versículos motivacionais</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button
                onClick={() =>
                  window.open("https://pay.hotmart.com/K99480183N?off=1pvjm7kd", "_blank")
                }
                className="w-full gradient-hope text-white hover:opacity-90"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Comprar Agora
              </Button>

              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Baixar Primeiro Capítulo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EbookModal;
