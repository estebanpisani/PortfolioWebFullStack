import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from './../token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyInterceptorService implements HttpInterceptor {

  constructor(private tokenService:TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    
    if(token!=null){
      intReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+token)
      });    
    }
    return next.handle(intReq);
  }
 
}

export const proyInterceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ProyInterceptorService, multi:true}];
