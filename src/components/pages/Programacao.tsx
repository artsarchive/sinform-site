import styles from './Programacao.module.css'

import Titulo from "../elements/Titulo";

function Programacao(){
    return (
        <section id="programacao" className={styles.programacao}>
            <div className={styles.container}>
                <Titulo 
                    subtitulo="O QUE VAI TER" 
                    titulo="Programação" 
                />
            </div>
        </section>
    )
}

export default Programacao;