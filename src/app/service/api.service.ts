import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient:HttpClient) { }

  URL="http://localhost:8080/api/";

  provaGet(query:string):Observable<any>{

    let risultato:any;

   this.httpClient.get(this.URL + "get?query=" + query).subscribe(x=>{

    risultato = x;


   });
   
   return risultato;
   
  }


}
