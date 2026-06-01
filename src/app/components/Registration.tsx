interface RegistrationProps {
  isDarkMode: boolean;
}

export function Registration({ isDarkMode }: RegistrationProps) {
  return (
    <section id="inscricao" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-[#F1E7B5]' : 'text-[#2E1E4D]'}`}>
          Não Perca a Oportunidade!
        </h2>
        <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#A1ADCF]' : 'text-[#5B439A]'}`}>
          Garanta sua vaga nos minicursos mais concorridos!
        </p>
        <button
          className={`px-12 py-5 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#B2CCF1] hover:text-[#2E1E4D]' : 'bg-[#5B439A] text-[#F1E7B5] hover:bg-[#2E1E4D]'} shadow-2xl`}
        >
          <a href="https://www.even3.com.br/24-semana-de-informatica-uesc-sinform-712603/" target="_blank" rel="noopener noreferrer">Inscreva-se na Programação</a>
          
        </button>
      </div>
    </section>
  );
}
