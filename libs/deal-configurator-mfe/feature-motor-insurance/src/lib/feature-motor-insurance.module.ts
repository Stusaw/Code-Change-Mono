import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MotorInsuranceComponent } from './containers/motor-insurance/motor-insurance.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MotorInsuranceComponent },
    ]),
  ],
  declarations: [MotorInsuranceComponent],
  exports: [MotorInsuranceComponent],
})
export class FeatureMotorInsuranceModule {}
