import { Link } from "react-router-dom";
import cubos from "../../src/assets/image/cubos.png";
/* import userIcon from "../../src/assets/image/userIcon.png"; */ // Importa tu icono de usuario aquí
import { useAuth0 } from "@auth0/auth0-react"; // Importa el hook de autenticación de Auth0
import "./Navigation.css";

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth0(); // Obtiene el estado de autenticación y la información del usuario

  return (
    <nav className="nav_style">
      <Link to="/">
        <img className="cubos1" src={cubos} alt="cubos" />
      </Link>
      <div className="register_login">
        {isAuthenticated ? ( // Si el usuario está autenticado
          <>
            {/* <img src={userIcon} alt="user" className="user_icon" /> */}
            <span>{user.name}</span>
            <button
              onClick={() => logout({ returnTo: "/" })}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link className="access_nav" to="/auth_user">
              Iniciar sesión
            </Link>{" "}
            |{" "}
            <Link className="register_nav" to="/users">
              Registrar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
