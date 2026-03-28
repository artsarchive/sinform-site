import styles from './Titulo.module.css'

function Titulo({subtitulo, titulo}: {subtitulo: string, titulo: string}){
    return (
        <div>
            <p className={styles.subtitulo}>{subtitulo}</p>
            <h3 className={styles.titulo}>{titulo}</h3>
        </div>
    )
}

export default Titulo;