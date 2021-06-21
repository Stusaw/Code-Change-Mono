import { Component, OnDestroy } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveStart,
  Router
} from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@shared-core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ngx-spinner type="ball-clip-rotate-multiple" size="medium"></ngx-spinner>
      <ion-router-outlet id="main" name="primary"></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private subs = new SubSink();

  constructor(
    private _router: Router,
    private _translateService: TranslateService,
    private _settings: SettingsService,
    private _spinner: NgxSpinnerService,
    private _platform: Platform
  ) {
    this.initializeApp();

    this._settings.notifyLanguageChange.subscribe((obj: { lang: string }) => {
      this._translateService.use(obj.lang);
    });
  }

  initializeApp() {
    this._platform.ready().then(() => {
      this.subscribeToRouterEvents();
    });
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
