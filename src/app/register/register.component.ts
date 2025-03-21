import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  title = 'ripassoFullStackFE';
  risultato:any;
  query:string="ciao a tutti";
  loginForm!: FormGroup;
  
  
  constructor(public apiService:ApiService,public fb: FormBuilder,private router:Router){
  }

  ngOnInit(): void {
    // Inizializza il FormGroup con i FormControl
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]), // Campo username con validazione
      password: new FormControl('', [Validators.required, Validators.minLength(6)])  // Campo password con validazione
    });
    
  }
  
 



 Register(){
  console.log(this.loginForm.value)
  if(this.loginForm.value.username=="" || this.loginForm.value.password == ""){
    this.risultato="c'è qualcosa vuota";
  }else{
    this.apiService.insertUser(this.loginForm.value.username,this.loginForm.value.password).subscribe(x=>{
        this.risultato=x;
    })

  }

 }

 moveToLogin(){
  console.log("sto provando");
  this.router.navigate(["login"]);
 }


sendQueryToBe(){
  this.apiService.provaGet().subscribe(x=>{
    this.risultato = x;
    console.log(this.risultato);
  });
}

}
