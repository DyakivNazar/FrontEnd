import {Isimpsons} from "../../models/Isimpsons.ts";
import {FC, ReactNode} from "react";
import './CharacterComponent.css'

type simpsonType = {
    simpson: Isimpsons,
    children: ReactNode,
}

const CharacterComponent:FC<simpsonType> = ({simpson, children}) => {
    return (
        <div>
            <h2>{simpson.name} {simpson.surname}</h2>
            <p>{simpson.age}</p>
            <p>{children}</p>
            <img src={simpson.photo} alt={(simpson.name, simpson.surname)}/>
        </div>
    );
};

export default CharacterComponent;