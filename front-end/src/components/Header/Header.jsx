// import { NavLink } from "react-router-dom";
import Logo from "./../../assets/images/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
 import { logout } from '../../redux/userSlice';
import "./Header.css";


// import SignIn from "../SignIn/SignIn";

function Header() {
    // Accéder à l'état de l'utilisateur dans Redux
    const user = useSelector((state) => state.user); // Permet d'accéder à l'état user dans Redux, info sur l'utilisateur actuellement connecté

   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        dispatch(logout());
        navigate('/'); // Redirige vers la page d'accueil après déconnexion
    };


    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {/* <SignIn /> */}

            <div>
                {/* Si l'utilisateur est authentifié, lien vers la page user + sign out */}
                {/* {/* {user.isAuthenticated ? (  */}

                {user.token ? (
                    <>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {user.firstName || 'User'} 

                            {/* {user.name} */}
                        </NavLink>
                        <NavLink className="main-nav-item" onClick={handleLogout}>
                        {/* <button className="main-nav-item" onClick={handleLogout}> */}
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                        {/* </button> */}
                    </>
                ) : (
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>

        </nav>
    )
}

export default Header;

// useEffect(() => {
//     if (user.isAuthenticated && user.token) {
//         dispatch(fetchUserProfile(user.token));
//     }
// }, [dispatch, user.isAuthenticated, user.token]); // Si l'utilisateur est authentifié ou a un token, exécute l'action fetch
