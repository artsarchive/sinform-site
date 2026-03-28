import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <p className={styles.logo}>SINFORM</p>
            <div className={styles.links}>
                <p className={styles.navegate}><a href="#home">Home</a></p>
                <p className={styles.navegate}><a href="#sobre">Sobre</a></p>
                <p className={styles.navegate}><a href="#programacao">Programação</a></p>
                <p className={styles.navegate}><a href="#minicursos">Minicursos</a></p>
                <p className={styles.navegate}><a href="#">Palestras</a></p>
            </div>
        </nav>
    )
}

export default Navbar;