import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { httpErrorInterceptor } from './core/api/interceptors/http-error';

export const appConfig: ApplicationConfig = {
  providers: [
    // ✅ Core Angular providers
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ✅ Routing
    provideRouter(routes),

    // ✅ HTTP client + global error interceptor
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
  ],
};
