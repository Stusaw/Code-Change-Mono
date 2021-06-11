import { APP_INITIALIZER } from '@angular/core';
import { TranslateLangService } from '../bootstrap/translate-lang.service';

export function TranslateLangServiceFactory(
  translateLangService: TranslateLangService
) {
  return () => translateLangService.load();
}

export const AppInitialiserProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: TranslateLangServiceFactory,
    deps: [TranslateLangService],
    multi: true
  }
];
