import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <Link to="*" className="notfound_style"><h2>Direccion de url no encontrada😪, Introduza bien la ruta</h2></Link>
    )
}

export default NotFound