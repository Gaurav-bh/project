import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router:Router ) { }
  canActivate () {
  {
    let bReturn = true;

//alert ("Data from LocalStore from AuthGuardService, is the user Logged in "+localStorage.get

    if (localStorage.getItem("isLoggedIn") == 'false')
    {
      this.router.navigate (['/login']);

      bReturn = false;

      
      
    }
    return bReturn;
  }
}
}
