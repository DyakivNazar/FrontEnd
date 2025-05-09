import {FC} from 'react';
import {ICars} from "../../models/ICars.ts";

type CarCompType = {
    car:ICars
}

const CarComp: FC<CarCompType> = ({car:{id,brand,year, price}}) => {
    return (
        <div>
            <h2>{id}{brand}</h2>
            <p>Price - {price}</p>
            <p>Year - {year}</p>
        </div>
    );
};

export default CarComp;