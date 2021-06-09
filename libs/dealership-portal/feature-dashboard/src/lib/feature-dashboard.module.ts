import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiMaterialDesignModule } from '@shared-ui-material-design';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/feature-dashboard/',
    '.json'
  );
}

@NgModule({
  imports: [
    CommonModule,
    UiMaterialDesignModule,
    TranslateModule.forChild({
      defaultLanguage: 'en-GB',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
      extend: true,
    }),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardComponent },
    ]),
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureDashboardModule {
  constructor(protected translateService: TranslateService) {
    const currentLang = translateService.currentLang;
    translateService.currentLang = '';
    translateService.use(currentLang);
  }
}
