import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from 'src/user';
import { AuthenticateService } from '../authenticate.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private regis:RegisterService,private auth:AuthenticateService) { }

  ngOnInit(): void {
    this.readData()
  }
  register()
  {
    this.router.navigate(["register"])
  }

  users:User[]=[]

  readData()
  { 
    

    this.regis.getusers().subscribe(
      (data) =>
        {
          this.users = data;
          console.log("inside")
          console.log(typeof(this.users))

        },
        (error) => console.log (error)
      );
      
  }


  login(username:string,pwd:string)
  {
    var flag=true;
    for(var user of this.users)
    {
      if(user.username==username && user.password==pwd )
      {
        this.auth.login(user.id.toString());
        localStorage.setItem("username",user.Fname)
        this.router.navigate(["home"]).then(()=>{
          window.location.reload();
        });
        flag=false;

      }
    }
    if(flag==true)
    {
      alert("Username and Password not matched")
    }
  }

}
