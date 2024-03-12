import { Link } from "react-router-dom";
import cubos from "../../src/assets/image/cubos.png";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navigation.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navigation = () => {
  const { username, userId } = useContext(StoreContext);
  const { isAuthenticated, user, logout } = useAuth0();
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
            <button onClick={() => logout({ returnTo: "/" })}>
              Cerrar sesión
            </button>
          </>
        ) : username ? ( // Si el usuario está autenticado
          <>
            {/* <img src={userIcon} alt="user" className="user_icon" /> */}
            <span>{username}</span>
            <button onClick={() => logout({ returnTo: "/" })}>
              Cerrar sesión
            </button>

            <Link to="/addproduct">
              <button>Publicar Producto</button>
            </Link>

            <Link to={`/profile/${userId}`}>
              <button>Mi perfil</button>
            </Link>

            <Link to={"/allproducts"}>
              <button>All</button>
            </Link>
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
