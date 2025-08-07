import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import './CompA.css'

export const CompA = () => {
    const {topic} = useContext(MyContext);
    return (
        <div className={topic}>
            CompA
            <p> Колір теми на сайті {topic}</p>
        </div>
    );
};