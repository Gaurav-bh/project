import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8000"
 
  getalldish():Observable<any>
  {
    var url_all=this.url+"/getAllDishes";
    return this.http.get(url_all);
  }
  getveg():Observable<any>
  {
    var url_veg =this.url+"/getAllVegdishes";
    return this.http.get(url_veg);
  }
  getvegbyname(name:any):Observable<any>
  {
    var url_veg_name =this.url+"/getvegdishbyname/"+name;
    return this.http.get(url_veg_name);
  }
  getnonveg():Observable<any>
  {
    var url_nonveg =this.url+"/getAllNonVegDishes";
    return this.http.get(url_nonveg);
  }
  getnonvegbyname(name:any):Observable<any>
  {
    var url_vegnon_name =this.url+"/getnonvegdishbyname/"+name;
    return this.http.get(url_vegnon_name);
  }
  getchinese():Observable<any>
  {
    var url_chinese =this.url+"/getAllChineseDishes";
    return this.http.get(url_chinese);
  }
  getchinesebyname(name:any):Observable<any>
  {
    var url_chinese_name =this.url+"/getchinesedishbyname/"+name;
    return this.http.get(url_chinese_name);
  }

  getcartdish(id:any):Observable<any>
  {
    let header = {'content-type': 'application/json'}; 
    var url_cart=this.url +"/cart/"+id.toString();
    return this.http.get(url_cart);
  }

  addtocart(obj:any):Observable<any>
  {
    let header = {'content-type': 'application/json'}; 

    var URL=this.url+"/insertintocart";
    console.log ("Data to be inserte in the db.json is : "+obj);
    return this.http.post(URL, obj, {'headers':header});
  }

  dishdelete(id:any)
  {
     var URl=this.url+"/deletedish/"+id;
     return this.http.delete(URl,{responseType:'text'});
  }

  insertdish(obj:any):Observable<any>
  {
    let header = {'content-type': 'application/json'}; 

    var URL=this.url+"/insertdish";
    console.log ("Data to be inserte in the db.json is : "+obj);
    return this.http.post(URL, obj, {'headers':header});

  }
  updatedish(userObj: any):Observable<any>
  {
    var URl=this.url+"/updatedish";
    let header = {'content-type': 'application/json'}; 
    return this.http.put(URl,userObj,{'headers':header,responseType:'text'});

  }
  updatecart(userObj:any):Observable<any>
  {
    var URl=this.url+"/updatecart";
    let header = {'content-type': 'application/json'}; 
    return this.http.put(URl,userObj,{'headers':header,responseType:'text'});
  }

}
