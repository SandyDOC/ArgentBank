import Feature from "../../components/Feature/Feature";
import Hero from "./../../components/Hero/Hero";

import IconChat from "./../../assets/images/icon-chat.png";
import IconMoney from "./../../assets/images/icon-money.png";
import IconSecurity from "./../../assets/images/icon-security.png";
import "./../Home/Home.css";

import data from "./../../data/feature.json";

const Home = () => {
    return (
        <>
        {data.map((item) => (
          <Feature key={item.id} icon={IconChat} title={item.title} text={item.content} />
        ))}
        {/* <Feature 
        icon={IconChat}
        title="You are our #1 priority" 
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature 
        icon={IconMoney}
        title="More savings means higher rates" 
        text="The more you save with us, the higher your interest rate will be!
"
        />
        <Feature 
        icon={IconSecurity}
        title="Security you can trust" 
        text="We use top of the line encryption to make sure your data and money
            is always safe."
        /> */}
        <Hero/>

            {/* <Hero /> */}
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {/* <Feature/> */}

                {/* <Feature icon={IconChat} /> */}
            </section>
        </>
    );
}

export default Home;