import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AppService} from './app.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _app: AppService, private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._app.isAuthorized && localStorage.getItem('token')) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this._router.navigate(['login']);
      return false;
    }
  }
}
