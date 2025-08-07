import {createContext} from "react";

type MyContextType = {
    topic: string;
    changeTopic: (topic: string) => void;
}

export const defaultType = {
    topic: 'light',
    changeTopic: (topic: string) => {
        console.log(topic)
    }
};


export const MyContext = createContext<MyContextType>(defaultType);