import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Container from '../../componentes/Container'
import style from './Sobre.module.css'


function Sobre() {
    return (
        <>
        <Header />
        <Container>
            <div>
        <figure>
           <img className={style.Imghome} src="/mapa-nathalia.png" alt="Imagem de Home" />
         </figure>
         </div>
         <div>
            <div className={style.aq}>
                <h1 className={style.aqp}>Aquilombamento</h1>
                <figure>
                    <img className={style.imgpretalab} src="/banner_pretalab.png" alt='Descrição PretaLab' />
                </figure>
                
            </div>
            <div className={style.ap}>
                <h1 className={style.apt}> Aprendizado na Formação PretaLab</h1>
                <figure>
                    <img className={style.pretalab} src="aprendizado.png" alt='Aprendizado na PretaLab' />
                </figure>
            </div>
         </div>
        </Container>
        <Footer />
        </>
       
    )
}

export default Sobre