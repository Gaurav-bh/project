import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  url_category ="http://localhost:8000/getAllCategory";
  url_corosal ="http://localhost:3000/corosals";
  getcategory():Observable<any>
  {

    
    return this.http.get(this.url_category);
  }

  getcorosals():Observable<any>
  {
    
    
    return this.http.get(this.url_corosal);
  }
}
