import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './authentication/auth.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    return this.isAllowed();
  }

  isAllowed(): boolean {
    if (this.authenticationService.checkIfLogged()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
