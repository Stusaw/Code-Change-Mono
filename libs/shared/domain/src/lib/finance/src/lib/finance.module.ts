import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FinanceProductApiService } from '@shared-domain-finance';
import { env } from './../../../env';
import { FinanceProductService } from './application/finance-product.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class FinanceModule {
  static forRoot(): ModuleWithProviders<FinanceModule> {
    return {
      ngModule: FinanceModule,
      providers: [
        {
          provide: 'Admin.FinanceProductService',
          useFactory: () =>
            new FinanceProductService('Admin'),
          deps: ['Admin.FinanceProductApiService'],
        },
        {
          provide: 'Admin.FinanceProductApiService',
          useFactory: (httpClient: HttpClient, env: env) =>
            new FinanceProductApiService(httpClient, env, 'Admin'),
          deps: [HttpClient, 'env'],
        },
        {
          provide: 'CustomerFinanceProductService',
          useFactory: () =>
            new FinanceProductService('Customer'),
          deps: ['CustomerFinanceProductApiService'],
        },
        {
          provide: 'CustomerFinanceProductApiService',
          useFactory: (httpClient: HttpClient, env: env) =>
            new FinanceProductApiService(httpClient, env, 'Customer'),
          deps: [HttpClient, 'env'],
        },
      ],
    };
  }
}
