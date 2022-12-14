import { Link } from "react-router-dom";

const AboutUsPage = () => {
    return ( <section className="aboutUsSection">
        <div className="Banner" />
        <h1 className="aboutName"> About Wilson </h1>
        <img className="aboutPfp" />
        <div className="socials">
            <a href="https://twitter.com/WillyRJR"className="twitter"> Twitters</a>
            <a href="https://github.com/TylenolSniffinTyler"className="github"> </a>
            <a href="mailto: willythewhale8@gmail.com"className="email"> contact ME! </a>
            <Link className="discord"></Link>
        </div>
        <div className="aboutMeDesc">I am an aspiring 17 year old Web Developer. I have been interested in coding ever since I was in 6th grade. I started out with dabbling in C++. Ever since, I’ve fallen effervescently in love with coding. I love making websites, it is my passion. I yearn to learn various other languages and work in different fields and hopefully for a well known company.</div>
    </section>);
}
 
export default AboutUsPage;