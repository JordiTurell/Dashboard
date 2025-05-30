import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment/environment';
import { catchError, throwError } from 'rxjs';
import { toast } from 'ngx-sonner';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(environment.token);
  const router = inject(Router);

  let newReq = req.clone({
    headers: req.headers.append('Content-Type', 'application/json')
  });

  if (token && !req.url.includes('login')) {
    newReq = newReq.clone({
      headers: newReq.headers.append('Authorization', `Bearer ${token}`)
    });

    return next(newReq).pipe(
      catchError((error) => {      
        if (error.status === 401) { 
          toast.error('Una sesión ha expirado, por favor vuelve a iniciar sesión');
          router.navigate(['/login']); 
        }
        return throwError(() => error);
      })
    );
  }else{
    return next(newReq);
  }  
};
