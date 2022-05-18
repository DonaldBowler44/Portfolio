function ServiceBox4({ imgName, box_name }) {
    return (
        <div className="service_box">
            <img src={imgName} alt="" />

            <h2>{box_name}</h2>

            <p>On my own time, I create my own projects, contribute to open source environments such as Github, StackOverflow, and participate in Hackathons. </p>

            <a href="https://stackoverflow.com/users/17769222/donnyb" className="service_button">
                Learn More
            </a>
        </div>
    );
}

//imgname: bluepill,blackcat,oracle,neogeo

//box_name: Design,Developer,ui/ux,Mobile App

export { ServiceBox4 };