import styles from './Sobre.module.css'

import Titulo from "../elements/Titulo";

function Sobre(){
    return (
        <div id='#sobre' className={styles.sobre}>
            <Titulo subtitulo="SOBRE O EVENTO" titulo="O que é SINFORM?" />
            <p>O SINFORM é a Semana de Informática da UESC, um evento criado para reunir estudantes, professores e profissionais em torno do conhecimento tecnológico. Nosso objetivo é fomentar a troca de experiências, apresentar tendências da área e inspirar a próxima geração de profissionais de tecnologia.</p>
        </div>
    )
}

export default Sobre;