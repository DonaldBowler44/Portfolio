function ServiceBox({ imgName, box_name }) {
    return (
        <div className="service_box">
            <img src={imgName} alt="" />

            <h2>{box_name}</h2>

            <p>Proficient in Design, not a designer. Familiarity with Frameworks and Markup languages.</p>

            <a href="#projects" className="service_button">
                Learn More
            </a>
        </div>
    );
}

//imgname: bluepill,blackcat,oracle,neogeo

//box_name: Design,Developer,ui/ux,Mobile App

export { ServiceBox };