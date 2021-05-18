import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { UiMaterialDesignModule } from '@shared-ui-material-design';

const formlyModuleProviders: Provider[] = FormlyModule.forRoot({
  extras: { checkExpressionOn: 'modelChange', lazyRender: true },
  types: [],
  wrappers: [],
  extensions: [],
  validationMessages: [],
}).providers;

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormlyModule,
  FormlyMaterialModule,
  UiMaterialDesignModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class FormlyConfigModule {
  static forRoot(): ModuleWithProviders<FormlyConfigModule> {
    return {
      ngModule: FormlyConfigModule,
      providers: [formlyModuleProviders],
    };
  }
}
