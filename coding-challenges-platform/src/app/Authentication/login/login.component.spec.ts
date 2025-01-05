import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { User } from '@firebase/auth'; 
import { of, throwError } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['signInWithEmail', 'signInWithGoogle']);
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Mock Firebase User Object
  const mockUser: User = {
    uid: '12345',
    email: 'test@example.com',
    displayName: 'Test User',
    emailVerified: true,
    isAnonymous: false,
    metadata: {
      creationTime: '2022-01-01T00:00:00Z',
      lastSignInTime: '2022-01-02T00:00:00Z',
    },
    phoneNumber: null,
    photoURL: null,
    providerData: [],
    refreshToken: 'mock-refresh-token',
    tenantId: null,
    providerId: 'firebase', // Added providerId
    getIdToken: jasmine.createSpy('getIdToken').and.returnValue(Promise.resolve('mock-id-token')),
    getIdTokenResult: jasmine.createSpy('getIdTokenResult').and.returnValue(Promise.resolve({ token: 'mock-token' })),
    reload: jasmine.createSpy('reload').and.returnValue(Promise.resolve()),
    toJSON: jasmine.createSpy('toJSON').and.returnValue({}),
    delete: jasmine.createSpy('delete').and.returnValue(Promise.resolve()), // Added delete method
  };
  
  it('should call AuthService and show success message on successful login', async () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('password123');
    authServiceSpy.signInWithEmail.and.returnValue(Promise.resolve(mockUser));

    await component.onLogin();

    expect(authServiceSpy.signInWithEmail).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Login Successful',
      detail: 'Welcome back!',
    });
  });

  it('should call AuthService and show success message on Google Sign-In success', async () => {
    authServiceSpy.signInWithGoogle.and.returnValue(Promise.resolve(mockUser));

    await component.onGoogleSignIn();

    expect(authServiceSpy.signInWithGoogle).toHaveBeenCalled();
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Google Sign-In Successful',
      detail: 'Welcome to the platform!',
    });
  });
});