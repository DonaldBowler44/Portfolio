import '../styles/About.css';
import Model from '../img/Donald.jpg'

function About() {
    return (
        <section className="about section" id="about">
        <div className='circle about_circleOne'></div>
        <div className='circle about_circleThree'></div>

        <h2 className="section_title">About</h2>

        <div className="aboutContainer bd_grid">
                <div className="about_text_Section">
                    <h2 className="about_subtitle">
                        The man behind the terminal... <br /> <span>Donald Bowler</span>
                    </h2>
                    <p>
                    Along with being an aspiring Full-Stack Developer. I'm also a lover of cars and motorcycles,
                    quite the movie fanatic and an ok swimmer! 
                    You can catch me in coffeeshops or whereever great tacos or turkey-legs are sold!
                    </p>

                <a href="https://www.instagram.com/bowlerdonald/" className="button">
                    Find Me
                </a>
                </div>

                <div className="aboutIMage">
                <img src={Model} alt="" />
            </div>
        </div>
    </section>
    )
}

export { About };