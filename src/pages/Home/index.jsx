import Header from "../../componentes/Header"
import Footer from "../../componentes/Footer"
import style from './Home.module.css'
import { Link } from "react-router-dom";
import Container from "../../componentes/Container";

function Home() {
    return (
        <>
       <Header />
       <Container>
       <section className={style.home}>
         <div className={style.apresentacao}> 
           <p> <br/> <span>Nathalia Nunes<br/></span>
            Comunicóloga e <br/>Desenvolvedora Front-End <br/>
          </p>
         </div>
         <Link to="/sobre" className={style.btnhome}>
           <span>Saiba mais </span> 
         </Link>
         <figure>
           <img className="img-home" src="/desenv.svg" alt="Imagem de Home" />
         </figure>
       </section>
       </Container>
         <Footer/>
       </>
       )
     }


export default Home