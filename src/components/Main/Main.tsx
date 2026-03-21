import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.flexbox}>
      <div className={styles.central}>
        <p className={styles.imersao}>IMERSÃO DE TECNOLOGIA</p>
        <h1>SINFORM</h1>
        <h2>SEMANA DE INFORMÁTICA</h2>
        <span>26 — 29 de maio · UESC, Ilhéus — BA</span>
        <button>Saiba Mais</button>
      </div>
    </main>
  );
}

export default Main;
