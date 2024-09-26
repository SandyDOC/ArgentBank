import Hero from "./../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";

import IconChat from "./../../assets/images/icon-chat.webp";
import IconMoney from "./../../assets/images/icon-money.webp";
import IconSecurity from "./../../assets/images/icon-security.webp";
import "./../Home/Home.css";

const Home = () => {
    return (
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature
                    icon={IconChat}
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Feature
                    icon={IconMoney}
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Feature
                    icon={IconSecurity}
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money
                is always safe."
                />
            </section>
       </main>
    );
}

export default Home;