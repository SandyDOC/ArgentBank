import Logo from "./../../assets/images/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/userSlice';
import "./Header.css";


function Header() {
    // Accéder à l'état de l'utilisateur dans Redux
    // const user = useSelector((state) => state.user); // Permet d'accéder à l'état user dans Redux, info sur l'utilisateur actuellement connecté
    const { firstName, userName, token } = useSelector((state) => state.user);

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
            <div>
                {/* Si l'utilisateur est authentifié, lien vers la page user + sign out */}
                {/* {user.token ? ( */}
                {token ? (
                    <>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {/* {user.firstName || user.newFirstName} */}
                            {firstName || userName}
                        </NavLink>
                        <NavLink className="main-nav-item" onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
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
