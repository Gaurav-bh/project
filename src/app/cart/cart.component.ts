import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dish:DishesService) { }

  ngOnInit(): void {
    this.getcartdihses();
  


  }
  cart:any[]=[];
  id=localStorage.getItem("id");
  total:number=0;
  qnty:number=0


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
            this.total=this.total+dish.qnty*dish.amount;
            
          }
          this.total+=5;

        },
        (error) => console.log (error)
      );

  }
  
  

}
