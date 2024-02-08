import { Link } from 'react-router-dom';
import style from './Header.module.css'



function Header() {
    return (
        <header className={style.header}>
            <Link to="/"></Link>
            
            <nav> 
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/comentarios">Comentário</Link>
                <Link to="/contato">Contato</Link>
           
                
            </nav>
                     
        </header>

    )
}

export default Header