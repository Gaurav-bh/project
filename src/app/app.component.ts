import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { AuthguardService } from './authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assingment';
  constructor(private router:Router,private auth:AuthenticateService,private authgur:AuthguardService)
  {}


  
  
 

 
}
