import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedComponentsModule } from '@shared-ui-components';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiModule {}
