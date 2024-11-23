import { useState, useEffect } from "react";

function Formulario() {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')
    
    useEffect(function(){
        console.log('o componente iniciou')

        return function(){
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(function(){
        console.log('o estado nome mudou')
    }, [nome])

    useEffect(function(){
        console.log('A matéria A mudou para: ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    function alteraNome(evento) {
        setNome(estadoAnterior => {
                // console.log(estadoAnterior)
                return evento.target.value;
            }
        )
    }

    function renderizaResultado() {
        const media = (materiaA + materiaB + materiaC)/3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado(a)</p>
            )
        } else {
            return(
                <p>Olá {nome}, você não foi aprovado(a)</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(function(item){
                    return <li key={item}>{item}</li>
                })} 
            </ul>
            <input type="text" placeholder="seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;