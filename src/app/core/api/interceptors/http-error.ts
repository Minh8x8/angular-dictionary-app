import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Global HTTP error interceptor
 * Handles API errors (network, server, dictionary not found, etc.)
 */
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An unexpected error occurred.';

      if (error.error) {
        // The Free Dictionary API returns structured error responses for invalid words
        if (error.error.title === 'No Definitions Found') {
          message = error.error.message;
        } else if (typeof error.error === 'string') {
          message = error.error;
        } else if (error.error.message) {
          message = error.error.message;
        }
      }

      console.error(`[HTTP ERROR] ${message}`, error);

      // Optionally, you can show a toast or rethrow for UI handling
      return throwError(() => new Error(message));
    })
  );
};
