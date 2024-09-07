import { NavLink } from "react-router-dom";
import "./../SignIn/SignIn.css";

const SignIn = () => {
    return (
        <NavLink to="/logIn" className="main-nav-item">
            <i class="fa fa-user-circle"></i>
            Sign In
        </NavLink>
    );
}

export default SignIn;