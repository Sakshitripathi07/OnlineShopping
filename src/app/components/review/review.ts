import { Product } from "../product-list/product";
import { User } from "./user";

export class Review {
    reviewId: number
    public userdetails: User;
    public model: string;
    public description: string;
    public rating: number;
    public product: Product;

    public constructor(reviewId: number, model: string, description: string, rating: number, userdetails: User, product: Product) {
        this.reviewId = reviewId;
        this.userdetails = userdetails;
        this.model = model;
        this.description = description;
        this.rating = rating;
        this.product = product;
    }
}