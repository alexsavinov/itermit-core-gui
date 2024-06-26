import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SettingsService } from '@core';


@Component({
  selector: 'app-translate',
  template: `
    <button id="translate-button"
            mat-icon-button
            matTooltip="Set language"
            [matMenuTriggerFor]="menu">
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let lang of langs | keyvalue" (click)="useLanguage(lang.key)">
        <span>{{ lang.value }}</span>
      </button>
    </mat-menu>
  `,
})
export class TranslateComponent {
  langs = {
    'en-US': 'English',
    'ru_RU': 'Русский',
    'uk_UA': 'Українська'
  };

  constructor(private translate: TranslateService, private settings: SettingsService) {
    translate.addLangs(['en-US', 'ru_RU', 'uk_UA']);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.settings.setLanguage(language);
  }
}
