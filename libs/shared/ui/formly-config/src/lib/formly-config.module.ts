import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { TranslateModule } from '@ngx-translate/core';
import { UiMaterialDesignModule } from '@shared-ui-material-design';
import { NgxMaskModule } from 'ngx-mask';
import { FormlyFieldInput } from './custom-types/input-field';
import { addonsExtension } from './extensions/addons-extension';
import { FormlyValidation } from './formly-validation';
import { FormlyMatAddonsWrapper } from './wrappers/mat-addons-wrapper';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormlyModule,
  FormlyMaterialModule,
  FormlyMatDatepickerModule,
  FormlyMatSliderModule,
  FormlyMatToggleModule,
  UiMaterialDesignModule,
  TranslateModule,
];

const CUSTOM_TYPES = [FormlyFieldInput];
const COMPONENTS = [FormlyMatAddonsWrapper, ...CUSTOM_TYPES];

const FormlyModuleProviders =
  FormlyModule.forRoot({
    extras: { checkExpressionOn: 'modelChange', lazyRender: true },
    types: [{ name: 'input-field', component: FormlyFieldInput }],
    wrappers: [{ name: 'addons', component: FormlyMatAddonsWrapper }],
    extensions: [
      { name: 'addons', extension: { onPopulate: addonsExtension } },
    ],
    validationMessages: [],
  }).providers || [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [NgxMaskModule.forRoot(), ...MODULES],
  exports: [...MODULES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormlyConfigModule {
  constructor(formlyValidation: FormlyValidation) {
    formlyValidation.init();
  }
  static forRoot(): ModuleWithProviders<FormlyConfigModule> {
    return {
      ngModule: FormlyConfigModule,
      providers: [FormlyModuleProviders, FormlyValidation],
    };
  }
}
