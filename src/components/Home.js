import React, { useEffect } from "react";
import "../styles/Home.css";
import { HomeSocial } from './HomeSocial';
import NeoImage from '../img/neo.png';
import redpill from '../img/redpill.png';
import matrixrain from '../img/matrixrain.png';
import whiterabbit from '../img/Whiterabbit.png';
import bentspoon from '../img/bent.png';


function Home() {

    return (
        <section className="home section bd_grid" id="home">
            <div className='circle circleOne'></div>
            <div className='circle circleTwo'></div>
            <div className='circle circleThree'></div>

            <div className="homeData">
                <h1 className="homeTitle">
                    The one <br /> <span> Donald Bowler</span> <br /> Full-Stack Developer
                </h1>


                <a href="/Contacts" className="button">
                Contact Me
                </a>
            </div>

            <div className="homeSocial">
                {
                    HomeSocial && HomeSocial.map((social) => (
                        <a href={social.iconLink} key={social.id}>
                            {social.iconName}
                        </a>
                    ))
                }
            </div>
            <div className="homeIMg">
                <img src={NeoImage} alt="" className="profileImg" />
                <img src={matrixrain} alt="" className="profileBg" />

                <img src={redpill} alt="" className="redpill" />
                <img src={whiterabbit} alt="" className="rabbit" />

                <div className="box box1">
                    <div className="imgBox">
                    <img src={bentspoon} alt="" className="bent"/>
                    </div>
                    <div className="contentBox">
                        <h2>Backend</h2>
                        <p>NodeJS, Express, SQL & NOSQL, Multer</p>
                    </div>
                </div>

                <div className="box box2">
                    <div className="imgBox">
                    <img src={bentspoon} alt="" className="bent"/>
                    </div>
                    <div className="contentBox">
                        <h2>FrontEnd</h2>
                        <p>ReactJs, MaterialUI,
                        Redux, Bootstrap</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export { Home } ;