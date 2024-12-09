import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [LoginComponent, SignupComponent],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss',
})
export class AuthContainerComponent {
  isLogin = true; // Tracks whether the current view is login or signup

  toggleView() {
    this.isLogin = !this.isLogin; // Switches between login and signup
  }
}
