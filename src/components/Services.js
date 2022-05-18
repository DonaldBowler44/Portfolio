import "../styles/Service.css";
import { ServiceBox } from "./ServiceBoxs.js/ServiceBox";
import { ServiceBox2 } from "./ServiceBoxs.js/ServiceBox2";
import { ServiceBox3 } from "./ServiceBoxs.js/ServiceBox3";
import { ServiceBox4 } from "./ServiceBoxs.js/ServiceBox4";

import bluepill from '../img/twobluepills.png';
import blackcat from '../img/blackcat.png';
import oracle from '../img/oracle.png';
import neogeo from '../img/neogeo.png'

function Services() {
    return(
        <section className="services section" id="services">
            <div className='circle services_circleOne'></div>
            <div className='circle services_circleThree'></div>

            <h2 className="section_title">Experience</h2>

            <div className="servicesContainer bd_grid">
                <div className="serviceIMage">
                <ServiceBox imgName={bluepill} box_name={"Design"} />
                <ServiceBox2 imgName={blackcat} box_name={"Developer"} />
                <ServiceBox3 imgName={oracle} box_name={"Languages"} />
                <ServiceBox4 imgName={neogeo} box_name={"Open Source"} />
                </div>
                    <div className="service_text_Section">
                        <h2 className="service_subtitle">
                            My work <br /> <span>Experience</span>
                        </h2>
                        <p>
                        I have worked in multiple technical roles. I have worked in the military dealing with sattelitle and communication equipment
                        hold a security clearence, dealing with comm-sac.
                        I have worked for a third party technical support company for Apple products including Macs, Tablets, and phones.
                        I am a self taught Web Developer, and enjoy the opportunity for learning new things!
                        </p>

                    <a href="https://docs.google.com/document/d/1hiNn_Xz6TXKjtQvYwKQaO8B66-KhPhYQkrJljUyXaFU/edit?usp=sharing" 
                    className="button" download>
                        My Resume
                    </a>
                    </div>
            </div>
        </section>
    )
}

export default Services;