import { Injectable } from '@angular/core';
import { FinanceProductApiService } from '@shared-domain-finance';

@Injectable()
export class FinanceProductService {
  constructor(
    private _financeProductApiService: FinanceProductApiService
  ) {}

  sayHello() {
    console.log('Hello from FinanceService');
  }

  activateVariant(productKey: string, variantKey: string) {
    console.log(productKey, variantKey);
    return this._financeProductApiService.activateVariant(
      productKey,
      variantKey
    );
  }
}
