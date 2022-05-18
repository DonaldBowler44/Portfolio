import {FaCheck} from "react-icons/fa"; 
import "../styles/Alert.css"

function Alert() {
    return (
    <div className="alert" id="alert">
        <div className="IconBox"><FaCheck /></div>
        <p className="alertText">Your message sent succesfully</p>
    </div>
    );
}

export { Alert };