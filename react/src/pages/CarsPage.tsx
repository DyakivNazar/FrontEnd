import {CarsComp} from "../components/cars/CarsComp.tsx";
import {Link} from "react-router-dom";

const CarsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'form-car'}>Add Car</Link></li>
            </ul>
            <CarsComp/>
        </div>
    );
};

export default CarsPage;