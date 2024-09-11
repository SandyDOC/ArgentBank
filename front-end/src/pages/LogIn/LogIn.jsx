import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import "./LogIn.css";

const LogIn = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
                <Button text="Sign In"/>
            </section>
        </main>
    );
}

export default LogIn;