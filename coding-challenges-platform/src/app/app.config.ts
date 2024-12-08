import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }), provideFirebaseApp(() => initializeApp({"projectId":"coding-challenges-platform","appId":"1:746757611919:web:8bf46c986a36274d2b6bfa","storageBucket":"coding-challenges-platform.firebasestorage.app","apiKey":"AIzaSyBVQpHYC6PYa3a6PX0TXDE7SeBIP4JYlP4","authDomain":"coding-challenges-platform.firebaseapp.com","messagingSenderId":"746757611919","measurementId":"G-842MR7GVZ6"})), provideAuth(() => getAuth()),
  ],
};
