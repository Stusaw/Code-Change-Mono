import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppMenuService } from '../common';

@Injectable({
  providedIn: 'root',
})
export class StartupBootstrapService {
  constructor(
    private _http: HttpClient,
    private _menuService: AppMenuService
  ) {}

  load(): Promise<any> {
    return Promise.all([this.menuPromise(), this.appConfigPromise()]);
  }

  appConfigPromise() {
    return new Promise((resolve, reject) => {
      this._http
        .get('assets/config/app-settings.json?_t=' + Date.now())
        .pipe(
          catchError((res) => {
            resolve({});
            return throwError(() => new Error(res));
          })
        )
        .subscribe({
          next: (res: any) => res,
          error: (e) => reject(),
          complete: () => resolve({}),
        });
    });
  }

  menuPromise() {
    return new Promise((resolve, reject) => {
      this._http
        .get('assets/menu/menu.json?_t=' + Date.now())
        .pipe(
          catchError((res) => {
            resolve({});
            return throwError(() => new Error(res));
          })
        )
        .subscribe({
          next: (res: any) => {
            this._menuService.recursMenuForTranslation(res.menu, 'menu');
            this._menuService.set(res.menu);
          },
          error: (e) => reject(),
          complete: () => resolve({}),
        });
    });
  }
}
