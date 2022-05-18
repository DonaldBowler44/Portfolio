import "../../styles/Home.css"
import redchair from '../../img/redchair.png';

function ContactList() {


    return (
        
        <section className="home section bd_grid">
            <div className='circle circleOne'></div>
            <div className='circle circleTwo'></div>
            <div className='circle circleThree'></div>

            <div className="homeData">
                <h1 className="homeTitle">
                <h1>loading program...</h1>
                Contact Info: <br /> <span>Email: donaldbowler45@gmail.com</span> <br /> 
                Phone Number: (210)-996-6803 <br />
                <span>Student-Email: donald.bowler45@my.utsa.edu</span>

                </h1>

            </div>

            <div>
                <img src={redchair} alt="" className="profileImg" />
                </div>
            
            

            
        </section>

    )
}

export { ContactList } ;