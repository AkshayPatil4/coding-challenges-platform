import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  user,
  User,
  updateProfile,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Expose the current user state as an observable
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = user(this.auth); // Observable that emits the current user
  }

  /**
   * Sign Up with Email and Password
   * @param name - User's name
   * @param email - User's email
   * @param password - User's password
   */
  signUpWithName(name: string, email: string, password: string): Promise<User> {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      (result) => {
        // Update the user's profile with the name
        return updateProfile(result.user, { displayName: name }).then(
          () => result.user
        );
      }
    );
  }

  // Sign In with Email and Password
  signInWithEmail(email: string, password: string): Promise<User> {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      (result) => result.user
    );
  }

  // Sign In with Google
  signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider).then((result) => result.user);
  }

  // Sign Out
  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
