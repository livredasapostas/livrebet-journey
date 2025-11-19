import { Heart, Instagram, BookOpen } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-hope bg-clip-text text-transparent mb-4">
              LivreBet
            </h3>
            <p className="text-sm text-muted-foreground">
              Um espaço seguro e acolhedor para quem busca libertação do vício em apostas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quiz")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("jogo")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Anti-Ansiedade
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("ajuda")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ajuda
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("versiculos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Versículos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("livro")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Livro
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pay.hotmart.com/K99480183N?off=1pvjm7kd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Comprar o eBook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            <Heart className="w-4 h-4 inline text-primary" /> Feito com amor para ajudar você a recomeçar
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LivreBet. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Seus dados são salvos apenas no seu dispositivo. Nenhuma informação é enviada para servidores
            externos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
