import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const CompB = () => {

    const { topic,changeTopic} = useContext(MyContext);

    const changeColor = () => {
        if(topic == 'light'){
            changeTopic("black");
        }
        else if(topic == 'black'){ changeTopic("light");}
    } ;

    const colorInWeb = () => {
        if(topic == 'light'){
            return 'black';
        }
        else if(topic == 'black'){return 'light';}
    }

    return (
        <div>
            CompB
            <button onClick={changeColor}>Зміна теми на {colorInWeb()}</button>
        </div>
    );
};