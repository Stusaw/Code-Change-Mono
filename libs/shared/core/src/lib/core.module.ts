import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { FORMLY_CONFIG } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { DomainModule } from '@shared-domain';
import {
  FormlyConfigModule,
  registerTranslateExtension
} from '@shared-ui-formly';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateLangService as LanguageBootstrapService } from './bootstrap/language-bootstrap.service';
import { AppCommonServices } from './common';
import { AppInitialiserProviders } from './initialisers/app-initialisers';
import { DefaultInterceptor } from './interceptors/default-interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [DomainModule, FormlyConfigModule.forRoot(), NgxSpinnerModule],
  exports: [NgxSpinnerModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(environment: any): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: 'env', useValue: environment },
        DefaultInterceptor,
        LanguageBootstrapService,
        AppInitialiserProviders,
        AppCommonServices,
        {
          provide: FORMLY_CONFIG,
          multi: true,
          useFactory: registerTranslateExtension,
          deps: [TranslateService],
        },
      ],
    };
  }
}
