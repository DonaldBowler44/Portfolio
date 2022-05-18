function ServiceBox2({ imgName, box_name }) {
    return (
        <div className="service_box">
            <img src={imgName} alt="" />

            <h2>{box_name}</h2>

            <p>Expertise in server-side and Back-End functionality. Knowledge base centered around routing, databases, and fetching.</p>

            <a href="https://github.com/DonaldBowler44" className="service_button">
                Learn More
            </a>
        </div>
    );
}

//imgname: bluepill,blackcat,oracle,neogeo

//box_name: Design,Developer,ui/ux,Mobile App

export { ServiceBox2 };