import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IModuleTranslationOptions, ModuleTranslateLoader } from '@larscom/ngx-translate-module-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function moduleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n/';

  const options: IModuleTranslationOptions = {  
    modules: [
      { baseTranslateUrl, pathTemplate: '{baseTranslateUrl}/{language}' },
      { baseTranslateUrl, pathTemplate: '{baseTranslateUrl}/sale/sale.{language}' }
    ]
  };

  return new ModuleTranslateLoader(http, options);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: moduleHttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
      extend: true
    }),
  ],
  exports: [TranslateModule],
})
export class TranslationModule {}
