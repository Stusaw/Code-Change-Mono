import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { DomainModule } from '@shared-domain';
import { TranslateLangService } from './bootstrap/translate-lang.service';
import { AppInitialiserProviders } from './initialisers/app-initialisers';
import { throwIfAlreadyLoaded } from './module-import-guard';

export function TranslateLangServiceFactory(
  translateLangService: TranslateLangService
) {
  return () => translateLangService.load();
}


@NgModule({
  imports: [DomainModule]
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
        TranslateLangService,
        AppInitialiserProviders
      ],
    };
  }
}
