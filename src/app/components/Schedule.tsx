import { useState } from "react";

type Trilha = "CIÊNCIA DE DADOS" | "WEB + UI/UX" | "BACKEND" | "MINICURSO";

interface EventoBase {
  title: string;
}

interface MinicursoSimples extends EventoBase {
  tipo: "minicurso-simples";
  speaker: string;
}

interface MinicursoTrilha extends EventoBase {
  tipo: "minicurso-trilha";
  trilha: Trilha;
  speaker: string;
}

interface Palestra extends EventoBase {
  tipo: "palestra";
  speaker: string;
  speakerDescription: string;
}

type EventoCronograma = MinicursoSimples | MinicursoTrilha | Palestra;

interface TimeSlotEvent {
  startTime: string;
  endTime: string;
  events: EventoCronograma[];
}

interface DaySchedule {
  day: string;
  timeSlots: TimeSlotEvent[];
}

interface ScheduleProps {
  isDarkMode: boolean;
}

export function Schedule({ isDarkMode }: ScheduleProps) {
  const scheduleData: DaySchedule[] = [
    {
      day: "Dia 09/06",
      timeSlots: [
        {
          startTime: "09:00",
          endTime: "10:15",
          events: [
            {
              tipo: "palestra",
              title: "Palestra 1",
              speaker: "Sílvio Commim",
              speakerDescription: "DATEN",
            },
          ],
        },
        {
          startTime: "10:45",
          endTime: "12:00",
          events: [
            {
              tipo: "palestra",
              title: "Palestra 2",
              speaker: "Leonardo Zanotto",
              speakerDescription:
                "Líder do time de governança de dados da iFood",
            },
          ],
        },
        {
          startTime: "14:00",
          endTime: "17:00",
          events: [
            {
              tipo: "minicurso-simples",
              title: "Mesa Redonda",
              speaker: "O universo da tecnologia na era da IA",
            },
          ],
        },
      ],
    },
    {
      day: "Dia 10/06",
      timeSlots: [
        {
          startTime: "08:00",
          endTime: "12:00",
          events: [
            {
              tipo: "minicurso-trilha",
              trilha: "CIÊNCIA DE DADOS",
              title: "Ciência de Dados com Python: Manipulação, estatística e visualização de dados",
              speaker: "Ítalo Seara",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "WEB + UI/UX",
              title:
                "UX Design Aplicado: Princípios essenciais para sistemas web e mobile",
              speaker: "Isabelle Cruz",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "BACKEND",
              title:
                "API REST na Prática com Python: Construindo e consumindo com Flask",
              speaker: "Izabelle Garcez",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title:
                "Estratégias de Inserção no Mercado de Trabalho: LinkedIn e Currículo",
              speaker: "Joabe Andrade",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title:
                "Conceitos Básicos de Programação e Resolução de Problemas Usando C e Python",
              speaker: "Humberto",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title: "Pacotes Online e Canva",
              speaker: "Maria Eduarda e Rebeca",
            },
          ],
        },
        {
          startTime: "14:00",
          endTime: "17:00",
          events: [
            {
              tipo: "minicurso-trilha",
              trilha: "CIÊNCIA DE DADOS",
              title: "Introdução a Machine Learning com Python: Modelos preditivos para ciência de dados",
              speaker: "Solana Marina",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "WEB + UI/UX",
              title:
                "Segurança Web: Fundamentos, vulnerabilidades e exploração",
              speaker: "Henrique Souza",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "BACKEND",
              title: "Introdução ao Deploy de APIs em Cloud",
              speaker: "Wilson Silva",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title: "Introdução a Git e GitHub",
              speaker: "João Pedro França",
            },
          ],
        },
      ],
    },
    {
      day: "Dia 11/06",
      timeSlots: [
        {
          startTime: "08:00",
          endTime: "12:00",
          events: [
            {
              tipo: "minicurso-trilha",
              trilha: "CIÊNCIA DE DADOS",
              title: "Do Dado Bruto ao Insight: Python + Power BI na prática",
              speaker: "Brenda Castro",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "WEB + UI/UX",
              title:
                "Frontend do Zero: Criando sua primeira página web na prática",
              speaker: "Davi Roriz",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "BACKEND",
              title: "Laravel na Prática: Criando e testando sua primeira API",
              speaker: "André Cardoso",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title: "Primeiros Passos no Teste de Softwares",
              speaker: "Thainá e Guilherme B.",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title:
                "Introdução ao Tráfego Pago com Meta ADS: Como anunciar no Facebook e Instagram",
              speaker: "Ryan",
            },
          ],
        },
        {
          startTime: "14:00",
          endTime: "17:00",
          events: [
            {
              tipo: "minicurso-trilha",
              trilha: "CIÊNCIA DE DADOS",
              title:
                "Do Pixel ao Prompt: Imersão em IA e prática em visão computacional",
              speaker: "Henrique Daniel",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "WEB + UI/UX",
              title: "FullStack com React, Node.js e TypeScript",
              speaker: "Renardo Alves",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "BACKEND",
              title:
                "Introdução à Programação Backend: Construindo APIs REST em .NET (Minimal API)",
              speaker: "Vitor Pires",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title:
                "Deep Learning para Detecção de Objetos em Vídeos Utilizando YOLO",
              speaker: "Claudio Goes",
            },
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title:
                "Edição e Restauração de Fotos com Photopea: Da introdução ao uso autônomo",
              speaker: "Erick Silva",
            },
          ],
        },
      ],
    },
    {
      day: "Dia 12/06",
      timeSlots: [
        {
          startTime: "08:00",
          endTime: "12:00",
          events: [
            {
              tipo: "minicurso-trilha",
              trilha: "MINICURSO",
              title: "Dominando o Terminal Linux: Do zero à automação",
              speaker: "Arthur de Carvalho",
            },
          ],
        },
        {
          startTime: "09:00",
          endTime: "11:00",
          events: [
            {
              tipo: "palestra",
              title: "Aquecimento para o Campeonato de Programação Universitário (CPU)",
              speaker: "Hamilton",
              speakerDescription: ""
            },
          ],
        },
        {
          startTime: "14:00",
          endTime: "18:00",
          events: [
            {
              tipo: "palestra",
              title: "Início do Campeonato de Programação Universitário (CPU)",
              speaker: "Hamilton",
              speakerDescription: ""
            },
          ],
        },
      ],
    },
  ];

  const dk = isDarkMode;

  const trilhaCores: Record<Trilha, string> = {
    "CIÊNCIA DE DADOS": dk
      ? "bg-sky-900/60 text-sky-200"
      : "bg-sky-100 text-sky-700",
    "WEB + UI/UX": dk
      ? "bg-violet-900/60 text-violet-200"
      : "bg-violet-100 text-violet-700",
    BACKEND: dk
      ? "bg-emerald-900/60 text-emerald-200"
      : "bg-emerald-100 text-emerald-700",
    MINICURSO: dk ? "bg-red-900/60 text-red-200" : "bg-red-100 text-red-700",
  };

  const [filtroDia, setFiltroDia] = useState<string | null>(null);

  const dadosFiltrados = scheduleData.filter(
    (day) => !filtroDia || day.day === filtroDia,
  );

  return (
    <section id="programacao" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${dk ? "text-[#F1E7B5]" : "text-[#2E1E4D]"}`}
        >
          Programação Detalhada
        </h2>

        {/* filtros */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {/* por dia */}
          <div className="flex gap-2 flex-wrap justify-center">
            {/* Botão Todos */}
            <button
              onClick={() => setFiltroDia(null)}
              className={`text-[16px] px-3 py-1 rounded-full border transition-colors ${
                filtroDia === null
                  ? dk
                    ? "bg-[#F1E7B5] text-[#2E1E4D]"
                    : "bg-[#2E1E4D] text-white"
                  : dk
                    ? "border-[#5B439A]/40 text-[#FFFFFF]/60 hover:border-[#F1E7B5]/40"
                    : "border-[#A1ADCF] text-[#5B439A] hover:border-[#2E1E4D]"
              }`}
            >
              Todos
            </button>

            {/* Botões dos Dias */}
            {["Dia 09/06", "Dia 10/06", "Dia 11/06", "Dia 12/06"].map((dia) => (
              <button
                key={dia}
                onClick={() => setFiltroDia(filtroDia === dia ? null : dia)}
                className={`text-[16px] px-3 py-1 rounded-full border transition-colors ${
                  filtroDia === dia
                    ? dk
                      ? "bg-[#F1E7B5] text-[#2E1E4D]"
                      : "bg-[#2E1E4D] text-white"
                    : dk
                      ? "border-[#5B439A]/40 text-[#FFFFFF]/60 hover:border-[#F1E7B5]/40"
                      : "border-[#A1ADCF] text-[#5B439A] hover:border-[#2E1E4D]"
                }`}
              >
                {dia}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {dadosFiltrados.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`rounded-xl overflow-hidden border ${dk ? "border-[#5B439A]/30" : "border-[#A1ADCF]/60"}`}
            >
              {/* cabecalho do dia */}
              <div
                className={`px-5 py-3 ${dk ? "bg-[#5B439A]/25" : "bg-[#5b439a]/15"}`}
              >
                <span
                  className={`text-[18px] font-semibold tracking-widest uppercase ${dk ? "text-[#F1E7B5]/70" : "text-[#5B439A]"}`}
                >
                  {day.day}
                </span>
              </div>

              {/* faixas de horario */}
              {day.timeSlots.every((slot) => slot.events.length === 0) ? (
                <div
                  className={`flex items-center justify-center px-4 py-8 border-t ${
                    dk ? "border-[#5B439A]/20" : "border-[#A1ADCF]/40"
                  }`}
                >
                  <span
                    className={`text-xs italic ${dk ? "text-[#A1ADCF]/40" : "text-[#5B439A]/40"}`}
                  >
                    Hmm... nada por aqui
                  </span>
                </div>
              ) : (
                day.timeSlots
                  .filter((slot) => slot.events.length > 0)
                  .map((slot, slotIndex) => (
                    <div
                      key={slotIndex}
                      className={`flex items-stretch border-t ${dk ? "border-[#5B439A]/20" : "border-[#A1ADCF]/40"}`}
                    >
                      {/* coluna horario */}
                      <div
                        className={`flex flex-col items-center justify-center px-4 py-4 min-w-[72px] border-r ${
                          dk
                            ? "border-[#5B439A]/20 bg-[#2E1E4D]/30"
                            : "border-[#A1ADCF]/40 bg-[#5b439a]/5"
                        }`}
                      >
                        <span
                          className={`text-[16px] font-semibold tabular-nums ${dk ? "text-[#F1E7B5]" : "text-[#2E1E4D]"}`}
                        >
                          {slot.startTime}
                        </span>
                        <span
                          className={`text-[14px] mt-0.5 tabular-nums ${dk ? "text-[#A1ADCF]/50" : "text-[#5B439A]/50"}`}
                        >
                          {slot.endTime}
                        </span>
                      </div>

                      {/* eventos */}
                      <div className="flex flex-wrap flex-1">
                        {slot.events.map((event, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col justify-center px-4 py-4 flex-1 min-w-[180px] min-h-[120px] border-r last:border-r-0 ${
                              dk ? "border-[#5B439A]/20" : "border-[#A1ADCF]/40"
                            }`}
                          >
                            <div className="flex flex-col justify-center py-2">
                              {event.tipo === "minicurso-trilha" && (
                                <>
                                  {event.tipo === "minicurso-trilha" &&
                                    event.trilha != "MINICURSO" && (
                                      <span
                                        className={`text-xs font-bold tracking-wide px-3 py-1 mb-2 rounded-full w-fit ${dk ? "bg-neutral-500/40 text-white" : "bg-neutral-900/60 text-white"}`}
                                      >
                                        TRILHA
                                      </span>
                                    )}
                                  <span
                                    className={`text-xs font-bold tracking-wide px-3 py-1 rounded-full w-fit ${trilhaCores[event.trilha]}`}
                                  >
                                    {event.trilha}
                                  </span>
                                </>
                              )}
                            </div>

                            <p
                              className={`text-[16x] font-semibold leading-snug ${dk ? "text-[#F1E7B5]" : "text-[#2E1E4D]"}`}
                            >
                              {event.title}
                            </p>
                            <p
                              className={`text-[14px] mt-1 ${dk ? "text-[#A1ADCF]/80" : "text-[#5B439A]/80"}`}
                            >
                              {event.speaker}
                            </p>

                            {event.tipo === "palestra" && (
                              <p
                                className={`text-[14px] mt-1 italic ${dk ? "text-[#F1E7B5]/70" : "text-[#5B439A]/75"}`}
                              >
                                {event.speakerDescription}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
