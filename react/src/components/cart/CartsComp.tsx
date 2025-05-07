import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {getAll} from "../../services/api.service.ts";
import {IBaseDummy} from "../../models/IBaseDummy.ts";
import CartComp from "./CartComp.tsx";

const CartsComp = () => {
    const {userId} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if (userId) {
            getAll<IBaseDummy & {carts: ICart[] }>('/carts/user/' + userId)
                .then(({carts})=> setCarts(carts))
        }
    }, [userId]);
    return (
        <div>
            {carts.map((cart) => <CartComp key={cart.id} cart={cart}/>)}
        </div>
    );
};

export default CartsComp;