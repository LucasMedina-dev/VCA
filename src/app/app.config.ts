import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-n0clp1iha3y7t6g5.us.auth0.com',
      clientId: 'gVVNIKhgO4o3Agz7A5BftqCvSh6UrW9J',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }), 
    provideAnimationsAsync(),
    provideHttpClient()
  ],
};
