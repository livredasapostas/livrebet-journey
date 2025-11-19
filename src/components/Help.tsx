import { Card } from "@/components/ui/card";
import { Phone, DollarSign, Heart, ExternalLink } from "lucide-react";

const Help = () => {
  return (
    <section id="ajuda" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Busque Ajuda</h2>
          <p className="text-muted-foreground">
            Você não precisa enfrentar isso sozinho. Aqui estão recursos que podem ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-soft hover:shadow-glow transition-all">
            <Phone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Ajuda Urgente</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-primary">CVV – 188</p>
                <p className="text-muted-foreground">Apoio emocional 24h, gratuito e sigiloso</p>
              </div>
              <div>
                <p className="font-semibold">CAPS (Centro de Atenção Psicossocial)</p>
                <p className="text-muted-foreground">Atendimento gratuito pelo SUS</p>
              </div>
              <div>
                <p className="font-semibold">Jogadores Anônimos</p>
                <p className="text-muted-foreground">Grupos de apoio em todo o Brasil</p>
                <a
                  href="https://www.jogadoresanonimos.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Encontrar grupo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-glow transition-all">
            <DollarSign className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Reorganização Financeira</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Procon</p>
                <p className="text-muted-foreground">Orientação sobre dívidas e direitos</p>
              </div>
              <div>
                <p className="font-semibold">Serasa Limpa Nome</p>
                <p className="text-muted-foreground">Renegociação de dívidas online</p>
                <a
                  href="https://www.serasa.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Acessar
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <p className="font-semibold">Dicas rápidas:</p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1 mt-2">
                  <li>Liste todas as dívidas</li>
                  <li>Priorize as essenciais</li>
                  <li>Negocie com calma</li>
                  <li>Busque orientação profissional</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-glow transition-all">
            <Heart className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-4">Apoio Espiritual</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                A fé pode ser um pilar fundamental na sua recuperação. Não hesite em buscar apoio espiritual
                se isso faz sentido para você.
              </p>
              <div>
                <p className="font-semibold">Algumas sugestões:</p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1 mt-2">
                  <li>Comunidades religiosas locais</li>
                  <li>Grupos de oração</li>
                  <li>Leitura bíblica diária</li>
                  <li>Conversas com líderes espirituais</li>
                </ul>
              </div>
              <p className="text-muted-foreground italic pt-3">
                "A oração pode ser um refúgio poderoso nos momentos de fraqueza."
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-sm text-muted-foreground">
            <strong className="text-foreground">Importante:</strong> Se você está em crise ou com pensamentos
            suicidas, ligue imediatamente para o CVV (188) ou procure o hospital mais próximo. Sua vida é
            preciosa.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Help;
