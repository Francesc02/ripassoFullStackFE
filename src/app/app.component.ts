import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 

    constructor(){

    }

    



}
