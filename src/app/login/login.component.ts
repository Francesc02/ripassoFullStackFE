import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
    title = 'ripassoFullStackFE';
    risultato:any;
    query:string="ciao a tutti";
    loginForm!: FormGroup;
    
    
    constructor(public apiService:ApiService,public fb: FormBuilder,public router:Router){
    }

    ngOnInit(): void {
      // Inizializza il FormGroup con i FormControl
      this.loginForm = this.fb.group({
        username: new FormControl('', [Validators.required, Validators.minLength(2)]), // Campo username con validazione
        password: new FormControl('', [Validators.required, Validators.minLength(6)])  // Campo password con validazione
      });
      
    }
    
   



   Login(){
    console.log(this.loginForm.value)
    if(this.loginForm.value.username=="" || this.loginForm.value.password == ""){
      this.risultato="c'è qualcosa vuota";
    }else{
      this.apiService.insertUser(this.loginForm.value.username,this.loginForm.value.password).subscribe(x=>{
          this.risultato=x;
      })

    }

   }

   moveToRegister(){
    console.log("sto provando");
    this.router.navigate(["register"]);
   }


  sendQueryToBe(){
    this.apiService.provaGet().subscribe(x=>{
      this.risultato = x;
      console.log(this.risultato);
    });
  }

}
