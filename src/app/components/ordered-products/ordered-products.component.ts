import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { OrderedProducts } from '../user/orderedProducts';

@Component({
  selector: 'app-ordered-products',
  templateUrl: './ordered-products.component.html',
  styleUrls: ['./ordered-products.component.css']
})
export class OrderedProductsComponent implements OnInit {

  orderid:any;
  orderedProducts:OrderedProducts[]=[];
  constructor(private activeRoute:ActivatedRoute, private userService:UserService){}
  ngOnInit(): void {
      this.activeRoute.paramMap.subscribe((param:ParamMap)=>{
          this.orderid=param.get('orderId')
      })
      this.getOrderedProducts(this.orderid)
    }
  getOrderedProducts(orderId:any){
    return this.userService.getOrderedProducts(orderId).subscribe(data=>{this.orderedProducts=data;})
  }
}