import { useState } from "react";

interface FooterProps {
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

export function Footer({ isDarkMode, scrollToSection }: FooterProps) {
  const [showToast, setShowToast] = useState(false);

    const handleCopyEmail = () => {
      navigator.clipboard.writeText("cacic@uesc.br");
      setShowToast(true);

      // Oculta o toast após 3 segundos
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    };

  return (
    <footer className={`py-12 px-4 sm:px-6 border-t ${isDarkMode ? 'bg-[#2E1E4D]/50 border-[#5B439A]/30' : 'bg-[#5b439a]/15 border-[#A1ADCF]'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
              SINFORM 2026
            </h4>
            <p className={`${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
              Semana de Informática da UESC
            </p>
          </div>
          <div>
            <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
              Links Úteis
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('sobre')} className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#5B439A] hover:text-[#2E1E4D]'}`}>
                  Sobre o Evento
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programacao')} className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#5B439A] hover:text-[#2E1E4D]'}`}>
                  Programação
                </button>
              </li>
              <li>
                <a href="https://www.uesc.br" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#5B439A] hover:text-[#2E1E4D]'}`}>
                  UESC
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`text-xl font-bold mb-4 ${
                isDarkMode ? "text-[#F1E7B5]" : "text-[#2E1E4D]"
              }`}
            >
              Contato
            </h4>

            {/* E-mail: Copia para a área de transferência ao clicar */}
            <p
              onClick={() => {
                handleCopyEmail();
              }}
              className={`flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80 mb-2 ${
                isDarkMode ? "text-[#A1ADCF]" : "text-[#5B439A]"
              }`}
              title="Clique para copiar o e-mail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>cacic@uesc.br</span>
            </p>

            {/* Instagram: Abre o link em uma nova aba */}
            <a
              href="https://instagram.com/cacicuesc"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-opacity hover:opacity-80 ${
                isDarkMode ? "text-[#A1ADCF]" : "text-[#5B439A]"
              }`}
              title="Visitar Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@cacicuesc</span>
            </a>

            {showToast && (
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg z-50 animate-bounce">
                E-mail copiado!
              </div>
            )}
          </div>
        </div>
        <div className={`text-center pt-8 border-t ${isDarkMode ? 'border-[#5B439A]/30 text-[#A1ADCF]' : 'border-[#A1ADCF] text-[#5B439A]'}`}>
          <p>© 2026 SINFORM - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
