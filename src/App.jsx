import { useState } from 'react';
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/RepoList'
import './global.css'


function App() {

  const [formularioEstaVisivel, setFormularioeEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={function(e){setNomeUsuario(e.target.value)}} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={function(){
        setFormularioeEstaVisivel(!formularioEstaVisivel)
      }} type='button'>Toggle form</button> */}
    </>
  )
}

export default App
