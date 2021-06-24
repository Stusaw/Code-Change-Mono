import { APP_INITIALIZER } from '@angular/core';
import { LanguageBootstrapService } from "../bootstrap/language-bootstrap.service";
import { StartupBootstrapService } from '../bootstrap/startup-bootstrap.service';

export function TranslateLangServiceFactory(
  translateLangService: LanguageBootstrapService
) {
  return () => translateLangService.load();
}

export function StartupServiceFactory(startupService: StartupBootstrapService) {
  return () => startupService.load();
}

export const AppInitialiserProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupBootstrapService],
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: TranslateLangServiceFactory,
    deps: [LanguageBootstrapService],
    multi: true
  }
];
