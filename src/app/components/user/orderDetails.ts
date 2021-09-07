import { Address } from "./address";
import { OrderedProducts } from "./orderedProducts";

export class OrderDetails {
    orderId: string;
    username: string;
    paymentmode: string;
    address: Address;
    orderDate: any;
    orderTime: any;
    status: any;
    amount: number;
    orderedProductList: OrderedProducts[];

    constructor(orderId: string,username: string,paymentmode: string,address: Address,orderDate: any,orderTime: any,status: any,amount: number,orderedProductDetails: OrderedProducts[]){
        this.orderId=orderId;
        this.orderedProductList=orderedProductDetails;
        this.address=address;
        this.username=username;
        this.paymentmode=paymentmode;
        this.orderDate=orderDate;
        this.orderTime=orderTime;
        this.status=status;
        this.amount=amount;
    }
    

}