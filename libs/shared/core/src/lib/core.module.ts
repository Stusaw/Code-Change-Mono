import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { DomainModule } from '@shared-domain';
import { CustomPipesModule } from '@shared-ui-custom-pipes';
import { TranslateLangService as LanguageBootstrapService } from './bootstrap/language-bootstrap.service';
import { AppCommonServices } from './common';
import { AppInitialiserProviders } from './initialisers/app-initialisers';
import { DefaultInterceptor } from './interceptors/default-interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';

export function TranslateLangServiceFactory(
  translateLangService: LanguageBootstrapService
) {
  return () => translateLangService.load();
}

@NgModule({
  imports: [DomainModule, CustomPipesModule],
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
      ],
    };
  }
}
