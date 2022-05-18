import MatrixRain from "./matrixrain/Matrixrain";
import MRButton from "./matrixrain/MRButton";
import { Link } from "react-router-dom";

function MRApp(){
    return(
        <div>

        <MatrixRain />

        <Link to="/Home">
        <MRButton />
        </Link>

        </div>
    )
}

export default MRApp;