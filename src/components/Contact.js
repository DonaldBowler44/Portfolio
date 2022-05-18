import "../styles/Contact.css";

import firebase from "./FirebaseConfig";

function Contact() {

    //creates database in firebase database

    const contactForm = firebase.database().ref('contactMessages');

    const contactFormSubmit = () => {
       var name = getElementVal("nameField");
       var email = getElementVal("emailField");
       var msg = getElementVal("msgContent");

       console.log(name, email, msg);

       saveMessages(name, email, msg);
       resetForm("contact_form");

       //Display Alert
       document.querySelector(".alert").classList.add("moveIn");
       document.querySelector(".alert").style.display = "flex";

       setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 4000);
    };

    const resetForm = (id) => {
        document.getElementById(id).reset();
    }

    const saveMessages = (name, email, msg) => {
        var newcontanctFormRef = contactForm.push();
        newcontanctFormRef.set({
            name: name,
            // emailid: email,
            email: email,
            msg: msg,
            // msgContent: msg,
        });
    }

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    };

    return (
    <section className="contact section" id="contact">
        <div className='circle contact_circleOne'></div>
        <div className='circle contact_circleThree'></div>

        <h2 className="section_title">Contact Me</h2>

        <div className="contactContainer bd_grid">
            <form id="contact_form" 
            className="contact_form" 
            onSubmit = {(e) => e.preventDefault()}>

                <input type="text" 
                placeholder="Name" 
                required id="nameField" 
                className="contact_input"
                />
                <input type="email" 
                placeholder="Email" 
                required id="emailField" 
                className="contact_input"
                />
                <textarea 
                id="msgContent" 
                placeholder="Message" 
                cols="0" 
                rows="10"
                className="contact_input"
                >
                </textarea>
                <input 
                    type="submit" 
                    value='Send' 
                    className="button contact_button"
                     onClick = {contactFormSubmit} 
                     />
            </form>
        </div>
    </section>
    );
}

export { Contact }