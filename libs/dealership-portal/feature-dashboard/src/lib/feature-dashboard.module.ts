import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiMaterialDesignModule } from '@shared-ui-material-design';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UiMaterialDesignModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardComponent },
    ]),
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureDashboardModule {}
