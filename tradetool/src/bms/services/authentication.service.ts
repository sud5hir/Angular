import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, catchError, config, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private _jwtHelper: JwtHelperService) {
    localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(new User());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    debugger;
    return this.http.post<any>(`https://localhost:7121/login`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        debugger;
        console.log(user);
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          !this._jwtHelper.isTokenExpired(user.token);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }
  public IsAuthenticated(): boolean {
    //  debugger;
    const token = localStorage.getItem("token") as string;
    console.log("token", token);
    return !this._jwtHelper.isTokenExpired(token);
  }

  setAuth(tokenObject: any) {
    localStorage.setItem("token", tokenObject.token)
  }

  clearAuth(): any {
    localStorage.clear();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    //this.currentUserSubject.next(null);
  }
  httpOptions: any;
  Validate(loginData: any) {
    // Simple GET request with response type <any>

    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(`https://localhost:5001/api/Login/`, loginData, this.httpOptions)
      .pipe(
        map((data) => {
          //You can perform some transformation here
          // this.setAuth(data)
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        }
        ))
  }
}
