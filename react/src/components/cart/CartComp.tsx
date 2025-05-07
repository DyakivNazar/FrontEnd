import {ICart} from "../../models/ICart.ts";

interface ICartComp {
    cart: ICart;

}
const CartComp = ({cart}: ICartComp) => {
    return (
        <div>
            {cart.total}
        </div>
    );
};

export default CartComp;