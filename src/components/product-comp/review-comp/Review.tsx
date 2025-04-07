import {IReviews} from "../../../models/IProduct.ts";
import {FC} from "react";

type ReviewPropsType = {
    review: IReviews
}

export const Review:FC<ReviewPropsType> = ({review:{reviewerName, comment}}) => {
    return (
        <div>
            <h5>{reviewerName}</h5>
            <p>{comment}</p>
        </div>
    );
};