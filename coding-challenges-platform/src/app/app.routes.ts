import { Routes } from '@angular/router';
import { SignupComponent } from './Authentication/signup/signup.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthContainerComponent } from './Authentication/auth-container/auth-container.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthContainerComponent },
];
