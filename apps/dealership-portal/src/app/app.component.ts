import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FinanceProductService } from '@shared-domain-finance';

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
    @Inject('Admin.FinanceProductService')
    private _adminFinanceService: FinanceProductService,
    @Inject('Customer.FinanceProductService')
    private _customerFinanceService: FinanceProductService,
    translate: TranslateService
  ) {
    this._adminFinanceService.sayHello();
    this._customerFinanceService.sayHello();

    this._adminFinanceService.activateVariant("ABC", "123");
    this._customerFinanceService.activateVariant("ABC", "123");

     // this language will be used as a fallback when a translation isn't found in the current language
     translate.setDefaultLang('en-GB');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en-GB')
  }
}
