import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FinanceProductService } from './application/finance-product.service';

@NgModule({
  imports: [CommonModule],
  providers: [FinanceProductService],
})
export class FinanceModule {
  constructor() {
    console.log('Finance module initialized');
  }
}
