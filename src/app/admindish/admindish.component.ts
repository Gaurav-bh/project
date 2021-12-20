import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { RegisterService } from '../register.service';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindish',
  templateUrl: './admindish.component.html',
  styleUrls: ['./admindish.component.css']
})
export class AdmindishComponent implements OnInit {

  constructor(private dish:DishesService,private regis:RegisterService,private category:CategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.getalldishes();
    this.getallcategory();
  }


  dishname="";
  dishid="";
 
  dishimage="";
  dishDescription="";
  dishamount="";
  dishcategory="";
  
  dishes:any[]=[];
  user:any[]=[];
  categories:any[]=[];
  assign( dishid:string,dishname:string, dishimage:string,dishDescription:string,dishamount:string,dishcategory:string)
  {
    this.dishid=dishid;
    this.dishname=dishname;
 
    this.dishimage=dishimage;
    this.dishDescription=dishDescription;
    this.dishamount=dishamount;
    this.dishcategory=dishcategory;

  }
  getalldishes()
  { 
    

    this.dish.getalldish().subscribe(
      (data) =>
        {
          this.dishes = data;
          console.log("inside")
          console.log(this.dishes)

        },
        (error) => console.log (error)
      );
      
  }
  deletedish(id:any)
  {
    this.dish.dishdelete(id).subscribe
    (
      (data)=>
      {
        this.getalldishes();
      },
      (error)=> console.log("Unable to delete record because")
    )
  }

  getallcategory()
  {
    this.category.getcategory().subscribe(
      (data) =>
        {
          this.categories = data;
          console.log(this.categories)
         },
        (error) => console.log (error)
    );
  }

  insertdish(Name:string,description:string,category:string,image:string,Amount:string)
  {
    console.log(Name+","+description)
    let userobj ={name:Name,des:description,cate_id:category,image:image,amount:Amount};
    console.log(userobj)
      this.dish.insertdish(userobj).subscribe
      (
        (data) =>
        {

          console.log("Inserted data is "+data); 
          console.log("In registered form")
        

        },
      (error) => console.log ("Unabled to insert record because" + error)

      ) ;
      this.router.navigate(["admin"]).then(()=>{
        window.location.reload();
      });
  }

  updatedish()
  {
    console.log("id: "+this.dishid)
    let userobj ={id:this.dishid,name:this.dishname,des:this.dishDescription,cate_id:this.dishcategory,image:this.dishimage,amount:this.dishamount};
    console.log("here")
    console.log(userobj)
    this.dish.updatedish(userobj).subscribe
      (
        (data) =>
        {

          console.log("Inserted data is "+data); 
          console.log("In registered form")
        

        },
        (error) => console.log ("Unabled to insert record because" + error)

      );
      this.router.navigate(["admin"]).then(()=>{
        window.location.reload();
      });


  }


}
