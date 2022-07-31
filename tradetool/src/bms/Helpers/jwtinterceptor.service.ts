import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    debugger;
    // add auth header with jwt if user is logged in and request is to api url
    const currentUser = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith('https://localhost:7121');
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }

}
