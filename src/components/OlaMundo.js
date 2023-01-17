
import styles from './OlaMundo.module.css'


function OlaMundo({nome, idade , profissao}) {

    return (
        <div className={styles.background}>
            <h1>Seja bem vindo {nome}</h1>
            <p className={styles.pContent}>Idade: {idade}</p>
            <p className={styles.pContent}>Profissão: {profissao}</p>
        </div>
    )
}


export default OlaMundo