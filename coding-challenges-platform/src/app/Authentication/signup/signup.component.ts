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
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;
  @Output() toggle = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onGoogleSignUp() {
    this.authService
      .signInWithGoogle()
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Google Signup Successful',
          detail: 'Welcome to the platform!',
        });
      })
      .catch((error) => {
        this.handleSignUpError(error);
      });
  }

  onSignUp() {
    if (this.signupForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill out the form correctly.',
      });
      return;
    }

    const { name, email, password, confirmPassword } = this.signupForm.value;

    if (password !== confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Password Mismatch',
        detail: 'Passwords do not match.',
      });
      return;
    }

    this.authService
      .signUpWithName(name, email, password)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Signup Successful',
          detail: 'Your account has been created!',
        });
      })
      .catch((error) => {
        // Handle specific Firebase error codes
        if (error.code === 'auth/email-already-in-use') {
          this.messageService.add({
            severity: 'error',
            summary: 'Signup Failed',
            detail: 'This email is already registered.',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Signup Failed',
            detail: 'An unexpected error occurred. Please try again later.',
          });
        }
      });
  }

  private handleSignUpError(error: any) {
    let errorMessage = 'An unknown error occurred.';
    if (error.code === 400) {
      errorMessage = 'This email is already registered.';
    }
    this.messageService.add({
      severity: 'error',
      summary: 'Signup Failed',
      detail: errorMessage,
    });
  }
  switchToLogin() {
    this.toggle.emit(); // Emit event to switch to Login
  }
}
