import { Link } from "react-router-dom";
import cubos from "../../src/assets/image/cubos.png"
const Navigation = () => {
    return (
        <nav className="nav_style">
            <Link to="/">LOGO</Link>
            <Link to="/auth_user">Iniciar</Link> | <Link to="/users">Registrar</Link>
            <img className="cubos1" src={cubos} alt="cubos" />
        </nav>
        
    )
}
export default Navigation;