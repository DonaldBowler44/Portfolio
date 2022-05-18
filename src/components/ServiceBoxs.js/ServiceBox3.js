function ServiceBox3({ imgName, box_name }) {
    return (
        <div className="service_box">
            <img src={imgName} alt="" />

            <h2>{box_name}</h2>

            <p>Familarity with Javascript, Java, Python, HTML, CSS, C. Love of learning new languages and concepts.</p>

            <a href="/Contacts" className="service_button">
                Learn More
            </a>
        </div>
    );
}

//imgname: bluepill,blackcat,oracle,neogeo

//box_name: Design,Developer,ui/ux,Mobile App

export { ServiceBox3 };