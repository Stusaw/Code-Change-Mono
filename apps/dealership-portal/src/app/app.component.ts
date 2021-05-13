import { Component } from '@angular/core';
import { FinanceProductService, IFinanceProduct } from '@shared-domain-finance';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _financeService: FinanceProductService) {
    this._financeService.sayHello();
    let product: IFinanceProduct;
  }
}
