import { Injectable } from '@angular/core';
import { FinanceProductApiService } from '@shared-domain-finance';

@Injectable({
  providedIn: 'root',
})
export class FinanceProductService {
  constructor(private _financeProductApiService: FinanceProductApiService) {}

  sayHello() {
    console.log('Hello from FinanceService');
  }

  activateVariant(productKey: string, variantKey: string) {
    return this._financeProductApiService.activateVariant(
      productKey,
      variantKey
    );
  }
}
