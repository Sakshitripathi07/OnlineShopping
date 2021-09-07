import { ThrowStmt } from "@angular/compiler";
import { Product } from "../product-list/product";

export class OrderedProducts {
    orderedProductId: number;
    orderId: string;
    amount: number;
    quantity: number;
    product: Product;
    constructor(orderedProductId: number,orderId: string,amount: number,quantity: number,product: Product){
        this.amount=amount;
        this.orderId=orderId;
        this.orderedProductId=orderedProductId;
        this.quantity=quantity;
        this.product=product;
    }

}