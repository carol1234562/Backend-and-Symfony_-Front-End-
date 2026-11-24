import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  { path: 'login', title: 'App Login Page', component: Login },
  { path: 'register', title: 'App Register Page', component: Register }
];