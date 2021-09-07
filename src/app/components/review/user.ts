export class User{
    username:string;
	password:string;
	firstName:string;
	lastName:string;
	emailId:string;
	mobileNo:number;

    public constructor(username:string,password:string,firstName:string,lastName:string,emailId:string,mobileNo:number){
        this.username=username;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailId=emailId;
        this.mobileNo=mobileNo;
    }
}