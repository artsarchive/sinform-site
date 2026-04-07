import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export function Header({ isDarkMode, setIsDarkMode, scrollToSection }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? 'bg-[#2E1E4D]/95' : 'bg-[#F1E7B5]/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-[#5B439A]/30' : 'border-[#2E1E4D]/20'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className={`text-2xl font-bold tracking-wider ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
            SINFORM
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#2E1E4D] hover:text-[#5B439A]'}`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('programacao')}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#2E1E4D] hover:text-[#5B439A]'}`}
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection('inscricao')}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-[#A1ADCF] hover:text-[#F1E7B5]' : 'text-[#2E1E4D] hover:text-[#5B439A]'}`}
            >
              Inscrição
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('inscricao')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#B2CCF1] hover:text-[#2E1E4D]' : 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#2E1E4D]'}`}
            >
              Inscreva-se
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#B2CCF1] hover:text-[#2E1E4D]' : 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#2E1E4D]'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
