import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <p className={styles.logo}>SINFORM</p>
            <div className={styles.links}>
                <p className={styles.navegate}>Sobre</p>
                <p className={styles.navegate}>Programação</p>
                <p className={styles.navegate}>Minicursos</p>
                <p className={styles.navegate}>Palestras</p>
            </div>
        </nav>
    )
}

export default Navbar