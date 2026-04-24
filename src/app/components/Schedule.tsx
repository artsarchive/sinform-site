interface Event {
  title: string;
  speaker: string;
  room: string;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
  events: Event[];
}

interface DaySchedule {
  day: string;
  timeSlots: TimeSlot[];
}

interface ScheduleProps {
  isDarkMode: boolean;
}

export function Schedule({ isDarkMode }: ScheduleProps) {
  const scheduleData: DaySchedule[] = [
    {
      day: 'Dia 9',
      timeSlots: [
        {
          startTime: '09:00',
          endTime: '10:15',
          events: [
            { title: 'Abertura SINFORM', speaker: 'Equipe Organizadora', room: 'Biblioteca' },
          ],
        },
        {
          startTime: '10:45',
          endTime: '12:00',
          events: [
            { title: 'Palestra 2', speaker: 'Prof. x', room: 'Sala 8B' },
          ],
        },
        {
          startTime: '14:00',
          endTime: '17:00',
          events: [
            { title: 'Mesa Redonda', speaker: 'Prof. x', room: 'Sala 8B' },
          ],
        },
      ],
    },
    {
      day: 'Dia 10',
      timeSlots: [
        {
          startTime: '08:00',
          endTime: '12:00',
          events: [
            { title: 'Dados: Minicurso 1', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Web: Minicurso 1', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Backend: Minicurso 1', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Minicurso QA', speaker: 'Thainá e Guilherme B', room: 'Sala y' },
          ],
        },
        {
          startTime: '14:00',
          endTime: '17:00',
          events: [
            { title: 'Dados: Minicurso 2', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Web: Minicurso 2', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Backend: Minicurso 2', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Introdução a Linux', speaker: 'Arthur de Carvalho', room: 'Sala y' },
          ],
        },
      ],
    },
    {
      day: 'Dia 11',
      timeSlots: [
        {
          startTime: '08:00',
          endTime: '12:00',
          events: [
            { title: 'Dados: Minicurso 3', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Web: Minicurso 3', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Backend: Minicurso 3', speaker: 'André Cardoso', room: 'Sala y' },
            { title: 'Introdução a Git e GitHub', speaker: 'João Pedro França', room: 'Sala y' },
            { title: 'Introdução a Programação', speaker: 'Humberto', room: 'Sala y' },
          ],
        },
        {
          startTime: '14:00',
          endTime: '17:00',
          events: [
            { title: 'Dados: Minicurso 4', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Web: Minicurso 4', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Backend: Minicurso 4', speaker: 'Prof. x', room: 'Sala y' },
            { title: 'Realidade Aumentada', speaker: 'Claudio Goes', room: 'Sala y' },
            { title: 'Canva e Pacote Office', speaker: 'Maria Eduarda e Rebeca', room: 'Sala y' },
          ],
        },
      ],
    },
    {
      day: 'Dia 12',
      timeSlots: [
        {
          startTime: '08:00',
          endTime: '12:00',
          events: [
            { title: 'LinkedIn', speaker: 'Joabe Andrade', room: 'Sala y' },
            { title: 'Aquecimento para CPU', speaker: 'Prof. x', room: 'Sala y' },
          ],
        },
        {
          startTime: '14:00',
          endTime: '17:00',
          events: [
            { title: 'Aquecimento para CPU', speaker: 'Hamilton', room: 'Sala y' },
          ],
        },
      ],
    },
  ];

  const dk = isDarkMode;

  return (
    <section id="programacao" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${dk ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
          Programação Detalhada
        </h2>

        <div className="flex flex-col gap-4">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`rounded-xl overflow-hidden border ${dk ? 'border-[#5B439A]/30' : 'border-[#A1ADCF]/60'}`}
            >
              {/* cabecalho do dia */}
              <div className={`px-5 py-3 ${dk ? 'bg-[#5B439A]/25' : 'bg-[#2E1E4D]/6'}`}>
                <span className={`text-sm font-semibold tracking-widest uppercase ${dk ? 'text-[#F1E7B5]/70' : 'text-[#5B439A]'}`}>
                  {day.day}
                </span>
              </div>

              {/* faixas de horario */}
              {day.timeSlots.map((slot, slotIndex) => (
                <div
                  key={slotIndex}
                  className={`flex items-stretch border-t ${dk ? 'border-[#5B439A]/20' : 'border-[#A1ADCF]/40'}`}
                >
                  {/* coluna horario */}
                  <div className={`flex flex-col items-center justify-center px-4 py-4 min-w-[72px] border-r ${
                    dk
                      ? 'border-[#5B439A]/20 bg-[#2E1E4D]/30'
                      : 'border-[#A1ADCF]/40 bg-[#F7F5FF]'
                  }`}>
                    <span className={`text-xs font-semibold tabular-nums ${dk ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
                      {slot.startTime}
                    </span>
                    <span className={`text-[10px] mt-0.5 tabular-nums ${dk ? 'text-[#A1ADCF]/50' : 'text-[#5B439A]/50'}`}>
                      {slot.endTime}
                    </span>
                  </div>

                  {/* eventos */}
                  <div className="flex flex-wrap flex-1">
                    {slot.events.map((event, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col justify-center px-4 py-4 flex-1 min-w-[160px] border-r last:border-r-0 ${
                          dk ? 'border-[#5B439A]/20' : 'border-[#A1ADCF]/40'
                        }`}
                      >
                        <p className={`text-sm font-semibold leading-snug ${dk ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
                          {event.title}
                        </p>
                        <p className={`text-xs mt-1 ${dk ? 'text-[#A1ADCF]/80' : 'text-[#5B439A]/80'}`}>
                          {event.speaker}
                        </p>
                        {event.room !== 'Sala y' && (
                          <p className={`text-[10px] mt-1 ${dk ? 'text-[#A1ADCF]/40' : 'text-[#5B439A]/40'}`}>
                            {event.room}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}