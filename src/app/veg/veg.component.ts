import { Component, OnInit } from '@angular/core';

import { DishesService } from '../dishes.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {

  constructor(private dish:DishesService,private activaterouted:ActivatedRoute,private router:Router) { }
  name="";

  ngOnInit(): void {
      this.getcartdihses();

      this.activaterouted.paramMap.subscribe( (param) =>
      {


            if(param.get('name')==null)
            {console.log(param.get('name'))
              this.getvegdish();
            }
            else
            {
            console.log(typeof(param.get('name')));
              this.getvegbyname(param.get('name'))
            }
      });
      
  }

  veges:any[]=[]
  cart:any[]=[]
  

  getvegdish()
  { 
    

    this.dish.getveg().subscribe(
      (data) =>
        {
          this.veges = data;
          console.log("inside")
          console.log(this.veges)

        },
        (error) => console.log (error)
      );
      
  }
  
  getvegbyname(name:any)
  {
    { 
      this.dish.getvegbyname(name).subscribe(
        (data) =>
          {
            this.veges = data;
            console.log("inside")
            console.log(this.veges)
  
          },
          (error) => console.log (error)
        );
        
    }

  }

  id=localStorage.getItem("id");
  addtocart(dishid:string)
  {
    var qnty=1;
    

    var flag=false
    console.log("hello")
    console.log("hii"+this.cart)
    for(var cartitem of this.cart)
    {
      console.log("jrur")
      console.log(cartitem)
      if(cartitem.user_id==this.id && cartitem.dish_id==dishid)
      {
        console.log("update")
        flag=true;
        qnty=cartitem.qnty+1;
      }
    }
    if(flag==true)
    {
      console.log("kya hai")
      var obj={user_id:this.id,dish_id:dishid,qnty:qnty}
      this.dish.updatecart(obj).subscribe
      (
        (data) =>
        {
          console.log("Inserted data is "+data); 
          console.log("In registered form")
        },
        (error) => console.log ("Unabled to insert record because" + error)

      );
    }
    else
    {
      var obj={user_id:this.id,dish_id:dishid,qnty:qnty}
      this.dish.addtocart(obj).subscribe
      (
        (data) =>
        {
          console.log("Inserted data is "+data); 
          console.log("In registered form")
        },
        (error) => console.log ("Unabled to insert record because" + error)

      );

    }
    

  }


  getcartdihses()
  {
    
    this.dish.getcartdish(this.id).subscribe(
      (data) =>
        {
          this.cart = data;
          console.log("inside")
          console.log(this.cart)
          for(var dish of this.cart)
          {
            console.log(dish.amount)
          }

        },
        (error) => console.log (error)
      );

  }


  
  search()
  {
    let strURLForProductsFilterById = "veg";

    if (this.name != "")
      strURLForProductsFilterById = "veg/"+this.name; // product1/185
    console.log(strURLForProductsFilterById)

    this.router.navigate([strURLForProductsFilterById]);

  }


}
