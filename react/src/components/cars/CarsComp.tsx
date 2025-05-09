import {useEffect, useState} from "react";
import {ICars} from "../../models/ICars.ts";
import {getAllCars} from "../../services/api.service.ts";
import CarComp from "./CarComp.tsx";
import './cars.css'

export const CarsComp = () => {
    const [cars, setCars] = useState<ICars[]>([]);

    useEffect(() => {
        getAllCars().then(value => setCars(value));
    }, []);

    return (
        <div  className={'grid'}>
            {cars.map((car) =><CarComp key={car.id} car={car}/>)}
        </div>
    );
};