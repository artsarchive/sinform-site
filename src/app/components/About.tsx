import { Users, TrendingUp, Lightbulb, Target } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
          O que é o SINFORM?
        </h2>

        <div className={`max-w-3xl mx-auto text-center mb-16 ${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#2E1E4D]'} text-lg leading-relaxed`}>
          <p>
            O SINFORM é a Semana de Informática da UESC, um evento criado para reunir estudantes, professores e profissionais em torno do conhecimento tecnológico. O objetivo é fomentar a troca de experiências, apresentar tendências da área e inspirar a próxima geração de profissionais de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, label: 'Reunir Pessoas' },
            { icon: TrendingUp, label: 'Fomentar Troca' },
            { icon: Target, label: 'Apresentar Tendências' },
            { icon: Lightbulb, label: 'Inspirar Futuro' }
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-[#2E1E4D]/30 hover:bg-[#5B439A]/30' : 'bg-white/80 hover:bg-[#2E1E4D]/10'}`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${isDarkMode ? 'bg-[#5B439A]' : 'bg-[#5B439A]'}`}>
                <item.icon className={`w-10 h-10 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#F1E7B5]'}`} />
              </div>
              <p className={`${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#2E1E4D]'}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
