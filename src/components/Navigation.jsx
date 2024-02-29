import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav_style">
            <Link to="/">LOGO</Link>
            <Link to="/auth_user">Iniciar</Link> | <Link to="/users">Registrar</Link>
        </nav>
    )
}
export default Navigation;