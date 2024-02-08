import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import { useState } from 'react';
import style from './Comentarios.module.css'

function Comentarios() {
  const [novoComentario, setNovoComentario] = useState('');

  function aoDigitarComentario(event) {
    setNovoComentario(event.target.value);
  }

  function aoClicarBotao() {
    setNovoComentario('');
 
  };
 
  return (
      <>
    <Header />
    <div className={style.comh}>
        <h1 className={style.tcom}>
            Deixe o seu comentário
        </h1>
        <img src="./teste.svg" alt="Comentário" />
      </div>
      <div className={style.combox}>
        <input
          type="text"
          value={novoComentario}
          onChange={aoDigitarComentario}
          placeholder="Digite aqui..."
        />
        <button className={style.combutton} onClick={aoClicarBotao}>+</button>
      </div>
    </>
  );
};
    <Footer />
  


export default Comentarios