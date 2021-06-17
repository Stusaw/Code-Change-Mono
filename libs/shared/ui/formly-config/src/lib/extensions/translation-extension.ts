import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

export class TranslateExtension {
  constructor(private translate: TranslateService) {}
  prePopulate(field: FormlyFieldConfig) {
    const to = field.templateOptions || {};
    if (!to.translate || to._translated) {
      return;
    }

    to._translated = true;
    field.expressionProperties = {
      ...(field.expressionProperties || {}),
      'templateOptions.label': to.label ? this.translate.stream(to.label || '') : to.label || '',
      'templateOptions.placeholder': to.placeholder ? this.translate.stream(to.placeholder ?? '') : to.placeholder ?? '',
      'templateOptions.mask': to.mask ? this.translate.stream(to.mask) : to.mask
    };
  }
}

export function registerTranslateExtension(translate: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message() {
          return translate.stream('FORM.VALIDATION.REQUIRED');
        },
      },
    ],
    extensions: [{
      name: 'translate',
      extension: new TranslateExtension(translate),
    }],
  };
}
