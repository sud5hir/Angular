import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { PizzaComponent } from '../pizza/pizza.component';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<PizzaComponent> {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canDeactivate(componenet: PizzaComponent): boolean {
    debugger;
    var isCanel = confirm("are u want to discard changes")
    return isCanel;
  }

  canActivate(): boolean {
    debugger;
    const currentUser = this.authenticationService.currentUserValue;
    debugger;

    if (typeof currentUser != 'undefined' && currentUser) {
      // logged in so return true
      this.router.navigateByUrl("/Login");
      return false
    }

    return true;
  }
}