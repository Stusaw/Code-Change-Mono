import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StartupBootstrapService {
  constructor(
    private _http: HttpClient
  ) { }

  load(): Promise<any> {

    return Promise.all([
      this.appConfigPromise()
    ])

  }

  appConfigPromise() {
    return new Promise((resolve, reject) => {
      this._http
        .get('assets/config/app-settings.json?_t=' + Date.now())
        .pipe(
          catchError(res => {
            resolve({});
            return throwError(res);
          })
        )
        .subscribe(
          (res: any) => {},
          () => {
            reject();
          },
          () => {
            resolve({});
          }
        );
    });
  }
}
