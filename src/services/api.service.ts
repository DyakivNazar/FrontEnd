import {IProduct} from "../models/IProduct.ts";
import {IProductDummy} from "../models/IProductDummy.ts";

const product = import.meta.env.VITE_API_URL + '/products';

const getProduct = async ():Promise<IProduct[]> => {
    const fullData:IProductDummy = await fetch(product)
            .then(res => res.json());
    return fullData.products
}

export {getProduct}