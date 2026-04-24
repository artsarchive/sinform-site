interface FooterProps {
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

export function Footer({ isDarkMode, scrollToSection }: FooterProps) {
  return (
    <footer className={`py-12 px-4 sm:px-6 border-t ${isDarkMode ? 'bg-[#2E1E4D]/50 border-[#5B439A]/30' : 'bg-white/50 border-[#A1ADCF]'}`}>
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
                <a href="https://uesc.br" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#5B439A] hover:text-[#2E1E4D]'}`}>
                  UESC
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
              Contato
            </h4>
            <p className={`${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
              cacic@uesc.br
            </p>
            <p className={`${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
              @cacicuesc
            </p>
          </div>
        </div>
        <div className={`text-center pt-8 border-t ${isDarkMode ? 'border-[#5B439A]/30 text-[#A1ADCF]' : 'border-[#A1ADCF] text-[#5B439A]'}`}>
          <p>© 2026 SINFORM - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
