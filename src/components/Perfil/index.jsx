import styles from './Perfil.module.css'

function retornaPerfil({ nomeUsuario }) {


    return (
        <header className={styles.header}>
            
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="foto de perfil do avatar"/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default retornaPerfil;