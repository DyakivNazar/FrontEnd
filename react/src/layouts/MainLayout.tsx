import {CompsB} from "../components/CompsB.tsx";
import {CompsA} from "../components/CompsA.tsx";
import {defaultType, MyContext} from "../context/MyContext.tsx";
import {useState} from "react";

const MainLayout = () => {

    const [topicColor, setTopicColor] = useState<string>(defaultType.topic);
    
    return (
        <div>
            <MyContext.Provider value={{
                topic: topicColor,
                changeTopic: (otherTopic: string) => setTopicColor(otherTopic),
            }}>
                <CompsA/>
                <CompsB/>
            </MyContext.Provider>
        </div>
    );
};

export default MainLayout;