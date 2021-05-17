import { NgModule } from '@angular/core';
import { FinanceModule } from '@shared-domain-finance';

@NgModule({
  imports: [
    FinanceModule.forRoot()
  ],
})
export class DomainModule {
}
