import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { DomainModule } from '@shared-domain';
import { LanguageTranslationModule } from '@shared-ui-language';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [DomainModule, LanguageTranslationModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(environment: any): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: 'env', useValue: environment }],
    };
  }
}
