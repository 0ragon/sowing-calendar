import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppService} from './app.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private _spinner: AppService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._spinner.toggleLoader();
    const res = req.clone();
    return next.handle(res);
  }

}
