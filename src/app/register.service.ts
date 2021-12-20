import { Injectable } from '@angular/core';
import { User } from 'src/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  url ="http://localhost:8000";

  constructor(private http:HttpClient) { }
  insertData (userObj: any): Observable<any>{

    let header = {'content-type': 'application/json'}; 

    var URL=this.url+"/insertUser";
    console.log ("Data to be inserte in the db.json is : "+userObj);
    return this.http.post(URL, userObj, {'headers':header});

  }

  getusers():Observable<any>
  {
    var URl=this.url+"/getAllUsers"
    return this.http.get(URl);
  }
  getusersbyid(id:any):Observable<any>
  {
    var URl=this.url+"/getuserbyid/"+id.toString();
    
    let header = {'content-type': 'application/json'}; 
    
    return this.http.get(URl);
  }
  updateuser(userObj: any):Observable<any>
  {
    var URl=this.url+"/updateuser";
    let header = {'content-type': 'application/json'}; 
    return this.http.put(URl,userObj,{'headers':header,responseType:'text'});

  }

  
}
