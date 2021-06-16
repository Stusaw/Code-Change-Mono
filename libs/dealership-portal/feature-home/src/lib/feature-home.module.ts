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
import { CustomPipesModule } from '@shared-ui-custom-pipes';
import { FormlyConfigModule } from '@shared-ui-formly';
import { SharedComponentsModule } from './../../../../shared/ui/shared-components/src/lib/shared-components.module';
import { HomeComponent } from './containers/home/home.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/feature-home/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormlyConfigModule.forRoot(),
    CustomPipesModule,
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
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureHomeModule {
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
