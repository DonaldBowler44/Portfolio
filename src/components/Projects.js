import "../styles/Projects.css";
import { ProjectImages } from './ProjectImages';

function Projects() {
    return (
        <section className="projects section" id="projects">
        <div className='circle projects_circleOne'></div>
        <div className='circle projects_circleThree'></div>

        <h2 className="section_title">Projects</h2>

        <div className="projectsContainer bd_grid">

        {
            ProjectImages && ProjectImages.map((image) => (
                <div className="prjectImg" href={image.imgLink} key = {image.id}>
                   <img src={image.imgSrc} alt="" />
               </div>
            ))
        }

        </div>

    </section>
    )
}

export { Projects }