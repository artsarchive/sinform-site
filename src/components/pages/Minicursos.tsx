import styles from './Minicursos.module.css'

import Titulo from "../elements/Titulo";

function Minicursos(){
    return (
        <div id='minicursos' className={styles.minicursos}>
            <Titulo subtitulo="MINICURSOS" titulo="Minicursos" />
        </div>
    )
}

export default Minicursos;