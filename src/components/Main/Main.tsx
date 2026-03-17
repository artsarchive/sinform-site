import styles from './Main.module.css'

function Main() {
    return (
        <main className={styles.flexbox}>
            
            <div className={styles.circleOne}/>
            <div className={styles.circleTwo}/>

            <p className={styles.imersao}>IMERSÃO DE TECNOLOGIA</p>
            
            <div className={styles.central}>
                <h1>SINFORM</h1>
                <h2>SEMANA DE INFORMÁTICA</h2>
            </div>
            
            <p>26 a 29 de maio | UESC, Ilhéus, BA</p>
            <button>Em Breve</button>
        </main>
    )
}

export default Main