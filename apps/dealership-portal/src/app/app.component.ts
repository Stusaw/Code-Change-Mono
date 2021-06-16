import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@shared-core';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private _translateService: TranslateService,
    private _settings: SettingsService
  ) {
    this._settings.notifyLanguageChange.subscribe((obj: { lang: string }) => {
      this._translateService.use(obj.lang);
    });
  }
}
