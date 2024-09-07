// import "./Hero.css";
// import "./../Hero/Hero.css";
import "./../Header/Header.css";
import backgroundImg from "./../../assets/images/bank-tree.jpeg";

const Hero = () => {
    return (
        <div className="hero">
            <img src={backgroundImg} alt="bank tree" className="hero"/>
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}

export default Hero;