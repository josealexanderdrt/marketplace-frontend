import { Link } from "react-router-dom";
import cubos from "../../src/assets/image/cubos.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="nav_style">
      <Link to="/">
        <img className="cubos1" src={cubos} alt="cubos" />
      </Link>
      <div className="register_login">
      <Link className="access_nav" to="/auth_user">Iniciar</Link> | <Link className="register_nav" to="/users">Registrar</Link>
      </div>
    </nav>
  );
};
export default Navigation;
