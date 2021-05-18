import { Component, Inject } from '@angular/core';
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
    private _customerFinanceService: FinanceProductService
  ) {
    this._adminFinanceService.sayHello();
    this._customerFinanceService.sayHello();

    this._adminFinanceService.activateVariant("ABC", "123");
    this._customerFinanceService.activateVariant("ABC", "123");
  }
}
