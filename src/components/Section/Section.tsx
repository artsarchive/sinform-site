import styles from "./Section.module.css";

function Section() {
  return (
    <section className={styles.flexbox}>
      <div className={styles.info}>
        <h1>O que é o SINFORM?</h1>
        <p>
          O SINFORM é a Semana de Informática da UESC, um evento criado para
          reunir estudantes, professores e profissionais em torno do
          conhecimento tecnológico. Nosso objetivo é fomentar a troca de
          experiências, apresentar tendências da área e inspirar a próxima
          geração de profissionais de tecnologia.
        </p>
      </div>
    </section>
  );
}

export default Section;
