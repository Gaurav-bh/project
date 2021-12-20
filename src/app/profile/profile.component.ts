import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from 'src/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private regis:RegisterService,private router:Router) { }

  ngOnInit(): void {
    this.getuser();
    this.assignuser();

  }
  Currentuser:User= new User(0,"","","","","","","");
  id=localStorage.getItem("id");
  getuser()
  {
    this.regis.getusersbyid(this.id).subscribe
    (
      (data)=>
      {
        this.Currentuser=data[0];
        console.log(data)
        console.log("here")
        console.log( typeof(this.Currentuser))
        console.log(this.Currentuser.Fname)
       

      },
      (error)=>console.log(error)
    )
  }
  fname=this.Currentuser.Fname;
  lname=this.Currentuser.Lname;
  email=this.Currentuser.Email;
  address=this.Currentuser.Address;
  phone=this.Currentuser.Phone;
  username=this.Currentuser.username;


 assignuser()
 {
    this.fname=this.Currentuser.Fname;
    this.lname=this.Currentuser.Lname;
    this.email=this.Currentuser.Email;
    this.address=this.Currentuser.Address;
    this.phone=this.Currentuser.Phone;
    this.username=this.Currentuser.username;
 }
 update()
 {
  let userobj ={"id":this.id,"Fname":this.fname,"Lname" :this.lname,"Email":this.email,"Phone":this.phone,"Address":this.address,"username":this.username};
  this.regis.updateuser(userobj).subscribe
  (
    (data) =>
    {

      console.log("Inserted data is "+data); 
      console.log("In registered form")
    

    },
  (error) => console.log ("Unabled to insert record because" + error)

  ) ;
  localStorage.setItem("username",this.fname)
  this.router.navigate(["profile"]).then(()=>{
    window.location.reload();
  });
 }
 







}
