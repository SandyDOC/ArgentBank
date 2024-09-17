import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import "./LogIn.css";

// import { useNavigate } from "react-router-dom";

const LogIn = () => {

    // const navigate = useNavigate();
    // const handleLog = () => {
    //     navigate('/user');
    // }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
                {/* <button onClick={handleLog} className="btn">Sign In</button> */}
            </section>
        </main>
    );
}

export default LogIn;