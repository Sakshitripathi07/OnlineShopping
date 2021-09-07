import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderedProductsComponent } from '../components/ordered-products/ordered-products.component';
import { User } from '../components/review/user';
import { userLogin } from '../components/review/userLogin';
import { Address } from '../components/user/address';
import { OrderDetails } from '../components/user/orderDetails';
import { OrderedProducts } from '../components/user/orderedProducts';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient){}
  public authenticateUser(username:string,password:string) : Observable<userLogin>
  {
       return this.httpClient.get<userLogin>('http://localhost:8091/username/'+username+'/password/'+password);  
  }

  public getUser(username:string):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8092/username/'+username);
  }

  public getAddress(username:string):Observable<Address[]>{
    return this.httpClient.get<Address[]>('http://localhost:8093/getAddress/username/'+username);

  }

  public getOrders(username:string):Observable<OrderDetails[]>{
    return this.httpClient.get<OrderDetails[]>('http://localhost:8094/getOrder/username/'+username);

  }

  public getOrderedProducts(orderId:any):Observable<OrderedProducts[]>{
    return this.httpClient.get<OrderedProducts[]>('http://localhost:8094/getOrderedProducts/'+orderId)
  }
}