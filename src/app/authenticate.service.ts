import { Injectable } from '@angular/core';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  varIsLoggedIn="isLoggedIn";
  varUserid="id";
  username="username"

  login(user:string){

    localStorage.setItem (this.varIsLoggedIn, 'true');//alert ("Set the isLogged in to true");
    localStorage.setItem(this.varUserid,user);
  }



  logout(){

    localStorage.setItem (this.varIsLoggedIn, 'false') ;
    localStorage.setItem(this.varUserid,"")
    localStorage.setItem(this.username,"USER")
    

  //alert ("Set the isLogged in to false");

  }
}
