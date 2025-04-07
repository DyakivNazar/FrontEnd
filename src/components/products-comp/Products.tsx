import {useEffect, useState} from "react";
import {getProduct} from "../../services/api.service.ts";
import {IProduct} from "../../models/IProduct.ts";
import {Product} from "../product-comp/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        getProduct().then(value => setProducts(value));
    }, []);
    return (
        <div>
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }

        </div>
    );
};