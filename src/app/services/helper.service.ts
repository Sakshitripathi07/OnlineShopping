import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class HelperService{
    public user:any;

    getUser(){
        return this.user
    }

    setUser(username:string){
        this.user=username;
    }
}