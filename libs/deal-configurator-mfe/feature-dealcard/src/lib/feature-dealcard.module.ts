import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '@shared-translation';
import { SharedComponentsModule } from '@shared-ui-components';
import { DealercardResolver } from './@resolvers/dealcard.resolver';
import { DealcardComponent } from './containers/dealcard/dealcard.component';

@NgModule({
  imports: [
    CommonModule,
    TranslationModule,
    SharedComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: DealcardComponent,
        resolve: { deal: DealercardResolver },
      },
      {
        path: 'insurance',
        loadChildren: () =>
          import('@deal-configurator-mfe/feature-insurance').then(
            (m) => m.FeatureInsuranceModule
          ),
      },
    ]),
  ],
  declarations: [DealcardComponent],
  exports: [DealcardComponent],
  providers: [DealercardResolver],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureDealcardModule {}
