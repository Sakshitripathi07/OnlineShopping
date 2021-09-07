import { Component, OnInit} from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../review/user';
import { userLogin } from '../review/userLogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggerUser:userLogin=new userLogin("","");
  currentUser:string="";
  loginModalStyle="none";
   regModalStyle="none";
   constructor(private userService:UserService, private helper:HelperService ){ }
  ngOnInit(): void {
   this.currentUser="";
  }
  ngOnDestroy(){
    this.currentUser="";
  }
   regUserStatus:string="";
   loginUserStatus:string="";
   openLoginModal()
   {
       this.loginModalStyle="block";
   }
  closeLoginModal()
   {
       this.loginModalStyle="none";
   }
   openUserRegModal()
   {
       this.regModalStyle="block";
   }
   closeUserRegModal()
   {
       this.regModalStyle="none";
   }
   userLogin(username:string,password:string) : void
   { 
       this.loginModalStyle="none";
      this.userService.authenticateUser(username,password).subscribe((data)=>{console.log(data);
      this.loggerUser=data;this.currentUser=data.username;this.helper.setUser(data.username)}); 

   }
   
   registerUser(uid:string,pwd:string,fname:string,lname:string,mobile:string,email:string)
   {
       this.regModalStyle="none"; 
       let user:User = new User(uid,pwd,fname,lname,email,parseInt(mobile));
       console.log("REGISTER USER");
      // this.userService.registerUser(user).subscribe((response)=>this.regUserStatus=response);
   }
   
  
}
