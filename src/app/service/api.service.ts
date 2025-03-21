import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient:HttpClient) { }

  URL="http://localhost:8080/api/";

  provaGet():Observable<any>{
   return this.httpClient.get(this.URL + "get")
  }

  insertUser(username:string,password:string):Observable<any>{

    const body = {username,password}

    return this.httpClient.post(this.URL + "insertUser", body);
  }

}
