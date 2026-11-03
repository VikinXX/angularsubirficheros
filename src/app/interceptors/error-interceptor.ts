import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ToastService } from 'ngx-yet-another-toast-library';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService: ToastService = inject(ToastService);
  const _router: Router = inject(Router);
  return next(req).pipe(
    // Aquí puedes manejar los errores de la respuesta HTTP
    catchError((error: HttpErrorResponse) => {
      toastService.error(error.message),
      _router.navigate(['/error']);
      console.log("tipo de error: " + error.status);
      console.log("Mensaje de error: " + error.message);
      
      return throwError(() => error);
    })
  );
};
