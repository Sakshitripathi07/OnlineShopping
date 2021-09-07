import { Byte } from "@angular/compiler/src/util";

export class Product{
    productId: number;
    model:string;
    description:string;
    manufacturer:string;
    category:string;
    productImage:Byte[];
    price: number;
    quantity:number;
    public constructor(productId:number,model:string,description:string,manufacturer:string,category:string,productImage:Byte[],price:number,quantity:number){
        this.productId=productId;
        this.model=model;
        this.description=description;
        this.price=price;
        this.category=category;
        this.manufacturer=manufacturer;
        this.quantity=quantity;
        this.productImage=productImage;
    }
}
