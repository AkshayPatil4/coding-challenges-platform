import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SignupComponent } from "./Authentication/signup/signup.component";
import { LoginComponent } from "./Authentication/login/login.component";
import { ChallengePageComponent } from "./Challenges/challenge-page/challenge-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SignupComponent, LoginComponent, ChallengePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coding-challenges-platform';
}
