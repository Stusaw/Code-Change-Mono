import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FinanceComponent } from './containers/finance/finance.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FinanceComponent },
    ]),
  ],
  declarations: [FinanceComponent],
  exports: [FinanceComponent],
})
export class FeatureFinanceModule {}
