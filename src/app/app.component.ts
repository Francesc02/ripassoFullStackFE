import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ripassoFullStackFE';

    query:string="";

    constructor(public apiService:ApiService){

    }

    sendQueryToBe(){
      console.log(this.query);
      let risultato=this.apiService.provaGet(this.query);

      console.log(risultato);

    }



}
