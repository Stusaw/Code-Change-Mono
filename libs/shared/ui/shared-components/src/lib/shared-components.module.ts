import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UiMaterialDesignModule } from '@shared-ui-material-design';
import { TranslateComponent } from './widgets/translate.component';

@NgModule({
  imports: [CommonModule, UiMaterialDesignModule.forRoot()],
  declarations: [TranslateComponent],
  exports: [TranslateComponent, UiMaterialDesignModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedComponentsModule {}
