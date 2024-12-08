import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authService.signInWithEmail(email, password).then(user => {
      console.log('Login successful:', user);
    }).catch(error => {
      console.error('Login failed:', error);
    });
  }

  onGoogleSignIn() {
    this.authService.signInWithGoogle().then(user => {
      console.log('Google Sign-In successful:', user);
    }).catch(error => {
      console.error('Google Sign-In failed:', error);
    });
  }
}