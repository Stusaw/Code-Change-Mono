import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsService } from '@shared-core';
import { SharedComponentsModule } from '@shared-ui-components';
import { InsuranceResolver } from './@resolvers/insurance.resolver';
import { InsuranceComponent } from './containers/insurance/insurance.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/feature-home/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
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
export class FeatureInsuranceModule {
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
