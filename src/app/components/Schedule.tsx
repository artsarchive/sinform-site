interface ScheduleProps {
  isDarkMode: boolean;
}

export function Schedule({ isDarkMode }: ScheduleProps) {
  const scheduleData = [
    { day: 'Dia 26', slots: [
      { time: 'Manhã', title: 'Abertura SINFORM', speaker: 'Equipe Organizadora', type: 'palestra' },
      { time: 'Tarde', title: 'Introdução ao React', speaker: 'Prof. Carlos Silva', type: 'minicurso' },
      { time: 'Noite', title: 'IA no Cotidiano', speaker: 'Dra. Ana Santos', type: 'palestra' }
    ]},
    { day: 'Dia 27', slots: [
      { time: 'Manhã', title: 'Python Avançado', speaker: 'Prof. João Lima', type: 'minicurso' },
      { time: 'Tarde', title: 'DevOps na Prática', speaker: 'Eng. Maria Costa', type: 'trilha' },
      { time: 'Noite', title: 'Segurança Digital', speaker: 'Dr. Pedro Alves', type: 'palestra' }
    ]},
    { day: 'Dia 28', slots: [
      { time: 'Manhã', title: 'Machine Learning', speaker: 'Profa. Laura Mendes', type: 'minicurso' },
      { time: 'Tarde', title: 'Cloud Computing', speaker: 'Arq. Rafael Souza', type: 'trilha' },
      { time: 'Noite', title: 'Carreira em Tech', speaker: 'Panel de Especialistas', type: 'palestra' }
    ]},
    { day: 'Dia 29', slots: [
      { time: 'Manhã', title: 'Blockchain Básico', speaker: 'Prof. André Rocha', type: 'minicurso' },
      { time: 'Tarde', title: 'UX/UI Design', speaker: 'Designer Juliana Pires', type: 'trilha' },
      { time: 'Noite', title: 'Encerramento', speaker: 'Equipe Organizadora', type: 'palestra' }
    ]}
  ];

  return (
    <section id="programacao" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
          Programação Detalhada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className={`rounded-2xl p-6 ${isDarkMode ? 'bg-[#2E1E4D]/50 border border-[#5B439A]/30' : 'bg-white border border-[#A1ADCF]'}`}>
              <h3 className={`text-2xl font-bold mb-6 text-center pb-4 border-b-2 ${isDarkMode ? 'text-[#F1E7B5] border-[#5B439A]' : 'text-[#2E1E4D] border-[#A1ADCF]'}`}>
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.slots.map((slot, slotIndex) => (
                  <div
                    key={slotIndex}
                    className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      slot.type === 'minicurso'
                        ? isDarkMode ? 'bg-[#5B439A]/50' : 'bg-[#5B439A]/20'
                        : slot.type === 'palestra'
                        ? isDarkMode ? 'bg-[#A1ADCF]/20' : 'bg-[#A1ADCF]/30'
                        : isDarkMode ? 'bg-[#2E1E4D]/50 border-2 border-[#A1ADCF]/30' : 'bg-[#F1E7B5]/50 border-2 border-[#5B439A]'
                    }`}
                  >
                    <p className={`text-sm mb-2 ${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
                      {slot.time}
                    </p>
                    <p className={`font-bold mb-1 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
                      {slot.title}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
                      {slot.speaker}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
