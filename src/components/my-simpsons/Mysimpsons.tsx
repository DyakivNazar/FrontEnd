import {Isimpsons} from "../../models/Isimpsons.ts";
import {FC} from "react";
import './Mysimpsons.css'


type simpsonsType = {
    simpson: Isimpsons
}

const Mysimpsons:FC<simpsonsType> = ({simpson}) => {
    return (
        <div>
            <h3>{simpson.name} {simpson.surname}</h3>
            <p>{simpson.age}</p>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={(simpson.name, simpson.surname)}/>

        </div>
    );
};

export default Mysimpsons;