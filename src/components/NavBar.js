import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
    <header>
        <Link to="/">
            <img src="https://web.dm.uba.ar/images/logo_clean_wide.png"></img>
        </Link>
        <ul>
            <li><Link id="link" to="/institucional">Institucional</Link></li>
            <li><Link id="link" to="/enseñanza">Cursos</Link></li>
            <li><Link id="link" to="/extension">Extensión</Link></li>
            <li><Link id="link" to="/investigacion">Investigación</Link></li>
            <CartWidget/>
        </ul>
    </header>

)};

export default NavBar