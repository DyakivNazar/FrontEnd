import {IProduct} from "../../models/IProduct.ts";
import {FC} from "react";
import './Product.css'
import {Review} from "./review-comp/Review.tsx";

type ProductPropsType = {
    product: IProduct
}

export const Product: FC<ProductPropsType> = ({product}) => {
    return (
        <div className={'product-wrapper'}>
            <h2>{product.title} - {product.price}</h2>
            <div className={'img'}>
                {product.images.map((image, index) => <img key={index} src={image} alt={product.title}/>)}
            </div>
            <p className={'description'}>{product.description}</p>
            <p>Category: {product.category}</p>
            <ul>dimension:
                <li>width: {product.dimensions.width}</li>
                <li>height: {product.dimensions.height}</li>
                <li>depth: {product.dimensions.depth}</li>
            </ul>
            <div className={'review'}>
                review
                {product.reviews.map((review, index) => <Review key={index} review={review}/>)}
            </div>
        </div>
    );
};