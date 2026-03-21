import styles from "./Navbar.module.css";
import { LuSun } from "react-icons/lu";

function Navbar() {
  return (
    <header>
      <nav>
        <h1 className={styles.logo}>SINFORM</h1>

        <div className={styles.links}>
          <p className={styles.navegate}>Sobre</p>
          <p className={styles.navegate}>Programação</p>
          <p className={styles.navegate}>Inscrição</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.signin}>Inscreva-se</button>

          <button className={styles.themes}>
            <LuSun />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
