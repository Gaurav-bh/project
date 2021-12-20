import { Component, OnInit } from '@angular/core';
import { C } from '@angular/core/src/render3';
import { DishesService } from '../dishes.service';
import { RegisterService } from '../register.service';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dish:DishesService,private regis:RegisterService,private category:CategoriesService,private router:Router) { }

  ngOnInit(): void {
    
  }

  
  
}
