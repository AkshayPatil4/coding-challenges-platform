import { Routes } from '@angular/router';
import { SignupComponent } from './Authentication/signup/signup.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthContainerComponent } from './Authentication/auth-container/auth-container.component';
import { ChallengesHomeComponent } from './Challenges/challenges-home/challenges-home.component';
import { ChallengePageComponent } from './Challenges/challenge-page/challenge-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'challenges_home', pathMatch: 'full' },
  { path: 'challenges_home', component: ChallengesHomeComponent },
  { path: 'challenges_page', component: ChallengePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthContainerComponent },
];
