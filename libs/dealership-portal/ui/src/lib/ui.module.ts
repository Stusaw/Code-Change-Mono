import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslationModule } from '@shared-translation';
import { SharedComponentsModule } from '@shared-ui-components';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    SharedComponentsModule,
    TranslationModule,
  ],
  declarations: [HeaderComponent, MainMenuComponent],
  exports: [HeaderComponent, MainMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiModule {}
