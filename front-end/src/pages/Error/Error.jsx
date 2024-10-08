import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <main className="container-error">
      <h1 className="numberError">Error</h1>
      <p className="explicationError">Oups! Une erreur s'est produite<br/>La page que vous demandez n'existe pas.</p>
      <Link to="/" className="homeError">Retourner sur la page d’accueil</Link>
      <button onClick={() => window.location.reload()} className="homeError btn">Recharger la page</button>
    </main>
  )
}

export default Error;

// import "./Error.css";
// function Error({ error }) {
//   const errorMessage = typeof error === 'string' ? error : error?.message;
//   return (
//     <main className="container-error">
//       <h1 className="numberError">Erreur</h1>
//       {/* <h1 className="numberError">{errorMessage ? "Erreur" : "Inconnu"}</h1> */}
//       <p className="explicationError">
//         Une erreur s'est produite : {errorMessage || "Erreur inconnue"}.
//       </p>
//       <button onClick={() => window.location.reload()} className="homeError">
//         Recharger la page
//       </button>
//     </main>
//   );
// }
// export default Error;
