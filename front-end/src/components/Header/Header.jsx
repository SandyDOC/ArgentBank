import Logo from "./../../assets/images/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import SignIn from "../SignIn/SignIn";

function Header() {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <SignIn />
        </nav>
    )
}

export default Header;