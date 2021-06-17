import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@dealership-portal-ui';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsService } from '@shared-core';
import { SharedComponentsModule } from '@shared-ui-components';
import { FormlyConfigModule } from '@shared-ui-formly';
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
    FormlyConfigModule,
    SharedComponentsModule,
    UiModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureDashboardModule {
  constructor(
    protected _translateService: TranslateService,
    protected _settings: SettingsService
  ) {
    //When the language changes we can force the lazy module to use the new setting
    this._settings.notifyLanguageChange.subscribe((obj: { lang: string }) => {
      this._translateService.currentLang = '';
      this._translateService.use(obj.lang);
    });
  }
}
