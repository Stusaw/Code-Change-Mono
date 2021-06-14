import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ToastrFactoryService } from '../common/toastr-factory.service';


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    private _toastr: ToastrFactoryService,
    private _authService: OidcSecurityService,
    private _spinner: NgxSpinnerService,
    @Inject('env') private _environment: any
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Loader
    this._spinner.show('globalSpinner', { color: 'white' });

    // Add server host
    const url = this._environment.SERVER_ORIGIN + req.url;

    // // Only intercept API url
    // if (!url.includes('https://localhost:44399/')) {
    //   return next.handle(req);
    // }

    // All APIs need JWT authorization
    const headers = {
      Accept: 'application/json',
      // "Accept-Language": this.settings.language,
      Authorization: `Bearer ${this._authService.getToken()}`,
    };

    const newReq = req.clone({
      url,
      setHeaders: headers,
      withCredentials: false,
    });

    return next.handle(newReq).pipe(
      mergeMap((event: HttpEvent<any>) => this.handleOkReq(event)),
      catchError((error: HttpErrorResponse) => this.handleErrorReq(error))
    );
  }

  private goto(url: string) {
    setTimeout(() => this._router.navigateByUrl(url));
  }

  private handleOkReq(event: HttpEvent<any>): Observable<any> {
    if (event instanceof HttpResponse) {
      const body: any = event.body;
      // failure: { code: **, msg: 'failure' }
      // success: { code: 0,  msg: 'success', data: {} }
      if (body && body.code !== 0) {
        if (body.msg && body.msg !== '') {
          this._toastr.show({ message: body.msg });
        }
        // return throwError([]);
      } else {
        return of(event);
      }
    }
    // Pass down event if everything is OK
    return of(event);
  }

  private handleErrorReq(error: HttpErrorResponse): Observable<never> {
    this._spinner.hide();

    switch (error.status) {
      case 0:
        this._toastr.show({
          message: error.message || 'Database connectivity issue',
        });
        this.goto(`/home`);
        break;
      case 400:
        this._toastr.show({
          message: error.error || error.message || 'Bad request',
        });
        break;
      case 401:
        this._toastr.show({
          message:
            error.error ||
            error.message ||
            'Authorisation has been denied for this request.',
        });
        this.goto(`/unauthorised`);
        break;
      case 403:
        this._toastr.show({
          message: error.error || error.message || 'This resource is forbidden',
        });
        break;
      case 404:
        this._toastr.show({
          message: error.error || error.message || 'Resource not found',
        });
        break;
      case 500:
        this._toastr.show({
          message:
            error.error.title || error.error.message || 'Internal server error',
        });
        break;
      default:
        break;
    }
    return throwError(error);
  }
}
