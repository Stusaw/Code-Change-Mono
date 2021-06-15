import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService, SettingsService } from '@shared-core';


@Component({
  selector: 'app-translate',
  template: `
    <button [matMenuTriggerFor]="menu">
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let lang of langs | keyvalue" (click)="useLanguage(lang.key)">
        <span>{{ lang.value }}</span>
      </button>
    </mat-menu> 
  `,
  styles: [],
})
export class TranslateComponent {
  langs = {
    'en-GB': 'English',
    'es-CL': 'Chile',
  };

  constructor(
    private _translate: TranslateService,
    private _settings: SettingsService,
    private _storageService: LocalStorageService
  ) {}

  useLanguage(language: string) {
    this._translate.use(language);
    this._settings.setLanguage(language);
    this._storageService.set('lang', language);
  }
}
