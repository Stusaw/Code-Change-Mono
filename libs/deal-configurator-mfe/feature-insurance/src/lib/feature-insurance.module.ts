import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared-ui-components';
import { InsuranceResolver } from './@resolvers/insurance.resolver';
import { InsuranceComponent } from './containers/insurance/insurance.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: InsuranceComponent,
        resolve: { deal: InsuranceResolver },
      },
    ]),
  ],
  declarations: [InsuranceComponent],
  exports: [InsuranceComponent],
  providers: [InsuranceResolver],
})
export class FeatureInsuranceModule {}
