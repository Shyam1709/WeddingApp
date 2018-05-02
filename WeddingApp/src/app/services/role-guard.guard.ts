import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticateUserService } from './authenticate-user.service';


@Injectable()
export class RoleGuard implements CanActivate {

constructor(public authenticateUserService: AuthenticateUserService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const expectedRole = route.data.expectedRole;
      if (!this.authenticateUserService.isLoggedIn() || this.authenticateUserService.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
