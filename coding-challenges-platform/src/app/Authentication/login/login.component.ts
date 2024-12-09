import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RouterModule } from '@angular/router';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputGroup,
    RouterModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    DividerModule,
    CommonModule,
    ToastModule,
    FloatLabel,
    Message,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  @Output() toggle = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill out the form correctly.',
      });
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService
      .signInWithEmail(email, password)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Welcome back!',
        });
      })
      .catch((error) => {
        this.handleLoginError(error);
      });
  }

  onGoogleSignIn() {
    this.authService
      .signInWithGoogle()
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Google Sign-In Successful',
          detail: 'Welcome to the platform!',
        });
      })
      .catch((error) => {
        this.handleLoginError(error);
      });
  }

  private handleLoginError(error: any) {
    const errorMessage = error.message || 'An unknown error occurred.';
    this.messageService.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: errorMessage,
    });
  }

  switchToSignup() {
    this.toggle.emit(); // Emit event to switch to Signup
  }
}
