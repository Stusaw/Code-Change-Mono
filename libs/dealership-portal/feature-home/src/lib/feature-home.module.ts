import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '@shared-translation';
import { FormlyConfigModule } from '@shared-ui-formly';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormlyConfigModule.forRoot(),
    TranslationModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureHomeModule {}
