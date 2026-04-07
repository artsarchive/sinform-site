import { BookOpen, Mic, Map } from 'lucide-react';

interface FeaturesProps {
  isDarkMode: boolean;
}

export function Features({ isDarkMode }: FeaturesProps) {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
          O que Você Vai Encontrar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: 'Minicursos', description: 'Aprenda na prática com workshops intensivos' },
            { icon: Mic, title: 'Palestras', description: 'Insights de profissionais e especialistas' },
            { icon: Map, title: 'Trilhas de Conhecimento', description: 'Caminhos estruturados de aprendizado' }
          ].map((item, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl ${isDarkMode ? 'bg-[#2E1E4D]/50 border-2 border-[#A1ADCF]/30 hover:border-[#B2CCF1]' : 'bg-white border-2 border-[#A1ADCF] hover:border-[#5B439A]'}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'bg-[#5B439A]' : 'bg-[#5B439A]'}`}>
                <item.icon className={`w-8 h-8 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#F1E7B5]'}`} />
              </div>
              <h3 className={`text-2xl mb-4 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
                {item.title}
              </h3>
              <p className={`${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
