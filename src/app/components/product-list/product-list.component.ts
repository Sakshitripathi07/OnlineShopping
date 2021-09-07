import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/services/product-list.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[]=[];

  //product:Product=new Product(0,"","","","","",0,0)
  //product:Product=new Product(0,"","","","","",0,0)
  public constructor(private productListService:ProductListService,private activatedRoute:ActivatedRoute){}
  category:any
  flag : boolean = false;
  ngOnInit(): void {
    this.category=this.activatedRoute.snapshot.paramMap.get('category');

    this.getProductListByCategory(this.category);  
  }
  public getProductListByCategory(productCategory:string){
      this.productListService.getProductListByCategory(productCategory).subscribe(data=>{this.productList=data});
      console.log(this.productList);
  }
  public showDescription(){
    this.flag = !this.flag; 
  }
}
