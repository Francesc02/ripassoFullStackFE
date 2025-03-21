import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'register',component:RegisterComponent}, // Corretto: aggiunto pathMatch
  { path: 'login', component: LoginComponent }, // Corretto: path in minuscolo
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect alla login
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // Corretto: aggiunto pathMatch
];
