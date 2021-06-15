import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { defaults } from './settings';

@Injectable()
export class SettingsService {
  private options = defaults;

  get notifyLanguageChange(): Observable<any> {
    return this.notifyLanguageChange$.asObservable();
  }
  private notifyLanguageChange$ = new BehaviorSubject<any>({});

  get language() {
    return this.options.language;
  }

  get currency() {
    return this.options.currency;
  }

  constructor() {}

  setLanguage(lang: string) {
    this.options.language = lang;
    this.notifyLanguageChange$.next({ lang });
  }
}
