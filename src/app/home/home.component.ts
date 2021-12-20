import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { category } from 'src/category';
import { corosal } from 'src/corosal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private category:CategoriesService) { }

  ngOnInit(): void {
    this.getallcategory();
    this.getallcorosals();
  }
  categories:any[]=[];
  corosals:corosal[]=[];
  
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
  getallcorosals()
  {
    this.category.getcorosals().subscribe(
      (data) =>
        {
          this.corosals = data;
          console.log(this.corosals)
         },
        (error) => console.log (error)
    );
  }

}
