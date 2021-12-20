import { Component, OnInit } from '@angular/core';
import { dish } from 'src/dish';
import { DishesService } from '../dishes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit {

  constructor(private dish:DishesService,private activaterouted:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getcartdihses();
    this.activaterouted.paramMap.subscribe( (param) =>
    {


          if(param.get('name')==null)
          {console.log(param.get('name'))
            this.getchindish();
          }
          else
          {
          console.log(typeof(param.get('name')));
            this.getchinbyname(param.get('name'))
          }
    });
  }

  chinese:any[]=[];
  cart:any[]=[];

  getchindish()
  { 
    

    this.dish.getchinese().subscribe(
      (data) =>
        {
          this.chinese = data;
          console.log("inside")
          console.log(this.chinese)

        },
        (error) => console.log (error)
      );
      
  }
  id=localStorage.getItem("id");
 

  getchinbyname(name:any)
  {
    { 
      this.dish.getchinesebyname(name).subscribe(
        (data) =>
          {
            this.chinese = data;
            console.log("inside")
            console.log(this.chinese)
  
          },
          (error) => console.log (error)
        );
    }
  }


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

  name="";


  search()
  {
    let strURLForProductsFilterById = "chinese";

    if (this.name != "")
      strURLForProductsFilterById = "chinese/"+this.name; // product1/185
    console.log(strURLForProductsFilterById)

    this.router.navigate([strURLForProductsFilterById]);

  }

}
