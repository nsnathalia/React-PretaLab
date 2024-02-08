import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import { useState } from 'react';
import style from './Contato.module.css'

function Contato() {
   const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function aoPreencherNome(event) {
        setNome(event.target.value);
    }

    function aoPreencherEmail(event) {
        setEmail(event.target.value);
    }

    function aoPreencherMensagem(event) {
        setMensagem(event.target.value);
    }

    function aoClicaBotao() {   
        setNome('');
        setEmail('');
        setMensagem('');
    }
    
    return (
       <>  
       <Header />
       <div className={style.contah}>
                <h1>
                    Entre em contato
                </h1>
                <img className="imgc"src="contato.svg" alt="Aplicativos para Contato" />
            </div>

            <div className={style.inpconta}>
                <input type="text" placeholder="Digite o seu nome" value={nome} onChange={aoPreencherNome} />
                <input type="email" placeholder="Digite o seu email" value={email} onChange={aoPreencherEmail} />
                <textarea placeholder="Digite uma mensagem" value={mensagem} onChange={aoPreencherMensagem}></textarea>
                <button className={style.contab} onClick={aoClicaBotao}>Enviar</button>
            </div>
        </>

 )
}
<Footer />
export default Contato