import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }
  url_leader ="http://localhost:3000/cooperate-leader";
  getusers():Observable<any>
  {
    return this.http.get(this.url_leader);
  }

}
