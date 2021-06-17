import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/material/form-field';

@Component({
  selector: 'formly-field-input',
  template: `
        <input matInput
          [type]="type || 'text'"
          [readonly]="to.readonly"
          [required]="to.required"
          [formControl]="formControl"
          [formlyAttributes]="field"
          [mask]="to.mask"
          thousandSeparator=","
        />
 `,
})
export class FormlyFieldInput extends FieldType {

  formControl!: FormControl;

  get type() {
    return this.to.type || 'text';
  }
}