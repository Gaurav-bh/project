import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from 'src/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private regis:RegisterService) { }

  ngOnInit(): void {
    

  }
  users:User[]=[]

  

  login()
  {
    this.router.navigate(["login"])
  }



  register(Fname:string,Lname:string,Email:string,Phone:string,Address:string,username:string,password:string)
  {
   
    let userobj ={"Fname":Fname,"Lname" :Lname,"Email":Email,"Phone":Phone,"Address":Address,"username":username,"password":password};
      this.regis.insertData(userobj).subscribe
      (
        (data) =>
        {

          console.log("Inserted data is "+data); 
          console.log("In registered form")
        

        },
      (error) => console.log ("Unabled to insert record because" + error)

      ) ;
      this.router.navigate(["login"])


  }

}
