import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

function ListaDeRepositorios({ nomeUsuario }) {
    const [repositorios, setRepositorios] = useState([]);
    const [carregamento, setCarregamento] = useState(true);
    useEffect(function(){
        setCarregamento(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resp => resp.json())
        .then(function(respJson){
            setTimeout(() => {
                setCarregamento(false)
                setRepositorios(respJson);
            }, 5000);
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            {carregamento ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.lista}>
                    {repositorios.map(function({id, name, language, html_url}){
                        return <li className={styles.listaItem}  key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} 
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language} 
                            </div>
                            <div>
                                <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                            </div>
                        </li>
                    })}
                </ul>
            )}
        </div>
            
        
    )
}

export default ListaDeRepositorios;