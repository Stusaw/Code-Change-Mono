import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '@shared-translation';
import { DealercardResolver } from './@resolvers/dealcard.resolver';
import { DealcardComponent } from './containers/dealcard/dealcard.component';

@NgModule({
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DealcardComponent,
        resolve: { deal: DealercardResolver },
      },
    ]),
  ],
  declarations: [DealcardComponent],
  exports: [DealcardComponent],
  providers: [DealercardResolver],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureDealcardModule {}
