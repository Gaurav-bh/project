import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { AuthguardService } from '../authguard.service';
import { User } from 'src/user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth:AuthenticateService,private authgur:AuthguardService,private regis:RegisterService) { }

  ngOnInit(): void {
    
  }
  islogin=true;

 
  username=localStorage.getItem("username");
  userlogedin:User[]=[];
 

  home()
  {
    this.router.navigate(["home"])
  }
  contact()
  {
    this.router.navigate(["contact"])
  }
  about()
  {
    this.router.navigate(["about"])
  }
  admin()
  {
    this.router.navigate(["admin"])
  }
  logout()
  {
    this.islogin=false
    this.auth.logout();
   
    this.router.navigate(["home"]).then(()=>{
      window.location.reload();
    });
    


  }
  login()
  {
    this.router.navigate(["login"])
    if (this.authgur.canActivate())
    this.islogin=true
    
    

  }

}
