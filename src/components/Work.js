import "../styles/Work.css";
import brandImage from '../img/utsarunner.png';

function Work() {
    return (
        <section className="work section" id="work">
        <div className='circle work_circleOne'></div>
        <div className='circle work_circleThree'></div>

        <h2 className="section_title">Education</h2>

        <div className="workContainer bd_grid">
            <div className="workIMage">
                <img src={brandImage} alt="" />
            </div>
                <div className="work_text_Section">
                    <h2 className="work_subtitle">
                        Current Student at <br /> <span>UTSA</span>
                    </h2>
                    <p>
                    I am currently a student at the University of Texas in San Antonio, transfer student from San Antonio College.
                    I have certificates in circuit analysis from my training in the military, and also have taken classes in biology 
                    undergraduate education including Anatomy, Biology, and Chemistry!
                    </p>

                <a href="/Contacts" className="button">
                    Details
                </a>
                </div>
        </div>
    </section>
    )
}

export { Work };