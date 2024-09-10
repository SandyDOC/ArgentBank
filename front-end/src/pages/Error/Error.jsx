import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <main className="container-error">
      <p className="numberError">404</p>
      <p className="explicationError">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="homeError">Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default Error;