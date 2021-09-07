import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';
import { Product } from '../components/product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  public constructor(private httpClient:HttpClient){}

  public getProductListByCategory(productCategory:string):Observable<Product[]>{
    console.log('http://localhost:8089/getProduct/category/'+productCategory);
    return this.httpClient.get<Product[]>('http://localhost:8089/getProduct/category/'+productCategory);
}
public getProductByModel(model:string):Observable<Product>{
  return this.httpClient.get<Product>('http://localhost:8089/getProduct/model/'+model);
}
}
