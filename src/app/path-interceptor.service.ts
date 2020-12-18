import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class PathInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes('http')) {
      req = req.clone({
        url:'http://localhost:3000/api'+req.url
      });
    }
    console.log(this);

    return next.handle(req)
    // .pipe(
    //   tap(res=>{
    //     if(res instanceof HttpResponse){
    //       console.log(res);
    //     }
    //   })
    // );
  }
}

export const pathInterceptorProvider:Provider={
  provide: HTTP_INTERCEPTORS,
  useClass: PathInterceptorService,
  multi:true
}
