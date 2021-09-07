import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';
import { Review } from '../review/review';
import { User } from '../review/user';
import { Address } from './address';
import { OrderDetails } from './orderDetails';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile : any;
  flag : boolean = false;
  add:boolean=false;
  username:any
  user:User=new User("","","","","",0)
  address:Address[]=[];
  myOrders:OrderDetails[]=[];
  myReviews:Review[]=[];
  order: boolean=false;
  reviews: boolean=false;
  cart:boolean=false;
  itemModalStyle: string="";
  constructor(private helper:HelperService,private userService:UserService,private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.username=this.helper.getUser();
    this.getUser(this.username);


  }
  getUser(username:string){
    this.userService.getUser(username).subscribe(data=>{console.log(data);this.user=data;})
  }
  showHideContactDetails(){
    this.flag = !this.flag; 
  }

  viewAddress(){
    this.add=!this.add;
    this.userService.getAddress(this.username).subscribe(data=>{this.address=data});
  }
  viewOrders(){
    this.order=!this.order
    this.userService.getOrders(this.username).subscribe(data=>{console.log(data);this.myOrders=data; })
  }
  viewReviews(){
    this.reviews=!this.reviews;
    this.reviewService.getReviewsByUsername(this.username).subscribe(data=>{this.myReviews=data})
  }
  
  viewCart(){
    this.cart=!this.cart;
  }
}
