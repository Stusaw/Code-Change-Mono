import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DealcardComponent } from './containers/dealcard/dealcard.component';

@NgModule({
  imports: [
    CommonModule,
    // TranslationModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DealcardComponent },
    ]),
  ],
  declarations: [DealcardComponent],
  exports: [DealcardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureDealcardModule {}
