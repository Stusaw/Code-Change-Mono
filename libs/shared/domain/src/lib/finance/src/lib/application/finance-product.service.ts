import { Inject, Injectable } from '@angular/core';

@Injectable()
export class FinanceProductService {
  constructor(
    @Inject('role') private role: string,
    // private _financeProductApiService: FinanceProductApiService
  ) 
  {}

  sayHello() {
    console.log('Hello from FinanceService');
    console.log('Role', this.role);
  }

  // activateVariant(productKey: string, variantKey: string) {
  //   return this._financeProductApiService.activateVariant(
  //     productKey,
  //     variantKey
  //   );
  // }
}
