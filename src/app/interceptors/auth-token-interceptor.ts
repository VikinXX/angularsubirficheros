import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.context.get(SKIP_TOKEN)){
    return next(req);
  }
  const token = sessionStorage.getItem('token');
  // Si tenemos token clonamos la petición
  if(token){
    // Clonamos la petición y añadimos el header Authorization con el token
    const tokenRequest = req.clone({
      setHeaders: {
        Authorization: "bearer " + token,
        withCredentials: "true"
      }
    });
    // Devolvemos la petición clonada
    return next(tokenRequest);
  }
  return next(req);
};
