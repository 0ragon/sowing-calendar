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
    const res = req.clone({headers: req.headers.set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODg1N2I0ZDUtYTRkOS00ZThlLTk5MmMtZjJhMDQ5NDBiZjRiIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwibmJmIjoxNTI3NTIxMTM0LCJleHAiOjE1MzI3MDUxMzQsImlzcyI6IlNvd2luZ0NhbGVuZGFyQXBpIiwiYXVkIjoiU293aW5nQ2FsZW5kYXJBcGlBdWRpZW5jZSJ9.S8ilwt5G_gi5ChH86uTi--B9l7NitP79pn19VqBPSZ8')});
    return next.handle(res);
  }

}
