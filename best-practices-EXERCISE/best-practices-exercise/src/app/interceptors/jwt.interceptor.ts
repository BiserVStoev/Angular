import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private router: Router){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.getAuthtoken() !== null) {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + this.getAuthtoken(),
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request)
        .pipe(tap((res: HttpEvent<any>) => {
            if(res instanceof HttpResponse && res.body.token){
                this.saveToken(res.body);
                this.toastr.success(res.body.message, "Success");
                this.router.navigate(['/furniture/all']);
            }

            if(res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')){
                this.toastr.success(res.body.message, "Success");
                this.router.navigate(['/signin']);
            }

            if(res instanceof HttpResponse && res.body.success && res.url.endsWith('create')){
              this.toastr.success(res.body.message, "Success");
              this.router.navigate(['/furniture/all']);
          }
        }))
  }

  private saveToken(data){
      localStorage.setItem('currentUser', JSON.stringify({
          "username": data.user.name,
          "token": data.token,
          "isAdmin": data.user.isAdmin
      }));
      localStorage.setItem('authToken', data.token);
  }

  private getAuthtoken(): string {
    return localStorage.getItem('authToken');
  }
}
