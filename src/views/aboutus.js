import { Link } from "react-router-dom";

const AboutUsPage = () => {
    return ( <section className="aboutUsSection">
        <div className="Banner" />
        <h1 className="aboutName"> About Wilson </h1>
        <img className="aboutPfp" />
        <div className="socials">
            <a href="https://twitter.com/WillyRJR"className="twitter social" />
            <a href="https://github.com/TylenolSniffinTyler" className="github social"/>
            <a href="mailto: willythewhale8@gmail.com"className="email social" />
            <div className="discord social" onMouseEnter={(e)=>{
                let discordLink = document.createElement('div')
                discordLink.classList.add("discordHover")
                discordLink.id = "discord"
                discordLink.textContent = "TylenolSniffinTyler#8198"
                e.target.appendChild(discordLink)
            }} onMouseLeave={(e)=>{
                let discordLink = document.getElementById('discord')
                e.target.removeChild(discordLink)
            }}/>
            <div className="connect">Connect with me on Different Platforms</div>
        </div>
        <div className="aboutMeDesc">I am an aspiring 17 year old Web Developer. I have been interested in coding ever since I was in 6th grade. I started out with dabbling in C++. Ever since, I’ve fallen effervescently in love with coding. I love making websites, it is my passion. I yearn to learn various other languages and work in different fields and hopefully for a well known company.</div>
    </section>);
}
 
export default AboutUsPage;