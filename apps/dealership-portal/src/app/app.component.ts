import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private _translate: TranslateService) {
    //This must be set here - Please do not remove.
    this._translate.setDefaultLang('en-GB');
    this._translate.use('en-GB');
  }
}
