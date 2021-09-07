import { User } from "../review/user";

export class Address{
    public addressId:number;

	public houseNumber:number;

	public streetName:string;

	public city:string;

	public state:string;

	public country:string;

	public postalCode:number;
	public UserDetails:User;

    constructor(addressId:number,houseNumber:number,streetName:string,city:string,state:string,country:string,postalCode:number,UserDetails:User){
        this.addressId=addressId;
        this.houseNumber=houseNumber;
        this.streetName=streetName;
        this.city=city;
        this.state=state;
        this.country=country;
        this.postalCode=postalCode;
        this.UserDetails=UserDetails;
    }

}