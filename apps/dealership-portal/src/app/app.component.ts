import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveStart,
  Router
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@shared-core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ngx-spinner type="ball-clip-rotate-multiple" size="medium"></ngx-spinner>
      <main-menu></main-menu>
      <ion-router-outlet id="main" name="primary"></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  constructor(
    private _router: Router,
    private _translateService: TranslateService,
    private _settings: SettingsService,
    private _spinner: NgxSpinnerService
  ) {
    this._settings.notifyLanguageChange.subscribe((obj: { lang: string }) => {
      this._translateService.use(obj.lang);
    });
  }
  ngOnInit(): void {
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  subscribeToRouterEvents() {
    this.subs.sink = this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      }

      if (event instanceof ResolveStart) {
        this._spinner.show();
      }

      if (event instanceof NavigationEnd) {
        this._spinner.hide();
      }

      if (event instanceof NavigationError) {
        this._spinner.hide();
      }
    });
  }
}
