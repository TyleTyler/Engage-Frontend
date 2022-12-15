import { Link } from "react-router-dom";
import grePfp from "../cssRes/greProf.png"
import wilPfp from "../cssRes/wilsonProf.png"
const AboutUsPage = () => {
    return ( 
    <section className="aboutUsSection">
        <div className="wilsonabout">
            <h1 className="aboutName"> About Wilson </h1>
            <img className="aboutWilsonPfp" src={wilPfp} />
            <div className="desc aboutWil">I am an aspiring 17 year old Web Developer. I have been interested in coding ever since I was in 6th grade. I started out with dabbling in C++. Ever since, I’ve fallen effervescently in love with coding. I love making websites, it is my passion. I yearn to learn various other languages and work in different fields and hopefully for a well known company.</div>
            <div className="socials wilSocials">
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
            </div>
        </div>


        <div className="greabout"> 
            <h1 className="aboutName"> About Gretel </h1>
            <img className="aboutGretelPfp" src={grePfp}/>
            <div className=" desc aboutGre">Gretel Rodriguez was born in Cuba and raised in America. She developed a passion for creating through her artistic endeavors. Today she enjoys building websites, animations, 3d modeling, photography, and making digital creations to share with the world. </div>
            <div className="socials greSocials"> 
                <a href="https://twitter.com/GretelR99531897"className="twitter social" />
                <a href="https://github.com/The-Fat-Cat" className="github social"/>
                <a href="mailto: gretelrodriguez42@gmail.com"className="email social" />
                <div className="discord social" onMouseEnter={(e)=>{
                    let discordLink = document.createElement('div')
                    discordLink.classList.add("discordHover")
                    discordLink.id = "discord"
                    discordLink.textContent = "Gretel#4599"
                    e.target.appendChild(discordLink)
                }} onMouseLeave={(e)=>{
                    let discordLink = document.getElementById('discord')
                    e.target.removeChild(discordLink)
                }}/>
            </div>
        </div>
    </section>);
}
 
export default AboutUsPage;