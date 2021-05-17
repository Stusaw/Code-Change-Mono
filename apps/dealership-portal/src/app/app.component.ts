import { Component, Inject } from '@angular/core';
import { FinanceProductService } from '@shared-domain-finance';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject('Admin.FinanceProductService')
    private _adminFinanceService: FinanceProductService,
    @Inject('CustomerFinanceProductService')
    private _customerFinanceService: FinanceProductService
  ) {
    this._adminFinanceService.sayHello();
    this._customerFinanceService.sayHello();
  }
}
