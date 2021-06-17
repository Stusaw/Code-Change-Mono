import { Injectable } from '@angular/core';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FormlyValidation {
  constructor(
    private translate: TranslateService,
    private formlyConfig: FormlyConfig
  ) {}

  // private requiredTrue(control: FormControl): ValidationErrors {
  //   return control.value == true ? null : { 'requiredtrue': true };
  // }

  init(): void {
    //Custom Validators
    // this.formlyConfig.setValidator(
    //   { name: 'requiredtrue', validation: this.requiredTrue }
    // )

    // message without params
    this.formlyConfig.addValidatorMessage('required', (_err: any, _field) =>
      this.translate.stream('global.validation.required')
    );

    // message with params
    this.formlyConfig.addValidatorMessage('minlength', (err, field) =>
      this.minlengthValidationMessage(err, field, this.translate)
    );
    this.formlyConfig.addValidatorMessage('maxlength', (err, field) =>
      this.maxlengthValidationMessage(err, field, this.translate)
    );
    this.formlyConfig.addValidatorMessage('min', (err, field) =>
      this.minValidationMessage(err, field, this.translate)
    );
    this.formlyConfig.addValidatorMessage('max', (err, field) =>
      this.maxValidationMessage(err, field, this.translate)
    );

    this.formlyConfig.addValidatorMessage('requiredtrue', (err, field) =>
      this.requiredTrueValidationMessage(err, field, this.translate)
    );
  }

  private minlengthValidationMessage(
    _err: any,
    field: FormlyFieldConfig,
    translate: TranslateService
  ) {
    return translate.stream('global.validation.minlength', {
      number: field?.templateOptions?.minLength,
    });
  }

  private maxlengthValidationMessage(
    _err: any,
    field: FormlyFieldConfig,
    translate: TranslateService
  ) {
    return translate.stream('global.validation.maxlength', {
      number: field?.templateOptions?.maxLength,
    });
  }

  private minValidationMessage(
    _err: any,
    field: FormlyFieldConfig,
    translate: TranslateService
  ) {
    return translate.stream('global.validation.min', {
      number: field?.templateOptions?.min,
    });
  }

  private maxValidationMessage(
    _err: any,
    field: FormlyFieldConfig,
    translate: TranslateService
  ) {
    return translate.stream('global.validation.max', {
      number: field?.templateOptions?.max,
    });
  }

  private requiredTrueValidationMessage(
    _err: any,
    field: FormlyFieldConfig,
    translate: TranslateService
  ) {
    return translate.stream('global.validation.requiredtrue', {
      number: field?.templateOptions?.max,
    });
  }
}
