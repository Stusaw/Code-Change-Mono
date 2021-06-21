import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

enum SubStepSlideNames {
  Marketing = 1,
  Confirmation = 2,
}

@Component({
  // templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.scss'],
  template: `
    <ion-content>
      <app-header></app-header>
      <div id="container">
        <a [routerLink]="['/home']">Home</a>
        <form fxLayout="column" fxLayoutAlign="center none" [formGroup]="form">
          <formly-form
            [form]="form"
            [fields]="fields"
            [model]="model"
          ></formly-form>
        </form>
      </div>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public form = new FormGroup({});
  public model = {};
  public fields: FormlyFieldConfig[] = [];
  constructor() {}

  ngOnInit(): void {
    this.configure();
  }

  configure() {
    this.form = new FormGroup({});
    this.model = {};
    this.fields = [
      {
        type: 'step-slider',
        fieldGroup: [
          {
            ...this.createSlide1(SubStepSlideNames.Marketing),
          },
          {
            ...this.createSlide2(SubStepSlideNames.Confirmation),
          },
        ],
      },
    ];
  }

  createSlide1(slideNumber: number): FormlyFieldConfig {
    return {
      key: `slide${slideNumber}`,
      templateOptions: {
        icon: 'person-add',
        label:
          'sale.first-contact.steps.first-contact-disclosure.sub-steps.1.nav-title',
        translate: true,
      },
      fieldGroup: [
        {
          key: 'input',
          type: 'input',
          templateOptions: {
            label: 'global.form_fields.personal.firstname',
            floatLabel: false,
            translate: true,
            required: true,
            addonLeft: {
              icon: 'face',
            },
          },
        },
        {
          key: 'input2',
          type: 'input',
          templateOptions: {
            label: 'global.form_fields.personal.firstname',
            floatLabel: false,
            translate: true,
            required: true,
            addonLeft: {
              icon: 'face',
            },
          },
        },
      ],
    };
  }
  createSlide2(slideNumber: number): FormlyFieldConfig {
    return {
      key: `slide${slideNumber}`,
      templateOptions: {
        icon: 'person-add',
        label:
          'sale.first-contact.steps.first-contact-disclosure.sub-steps.1.nav-title',
        translate: true,
      },
      fieldGroup: [
        {
          key: 'input3',
          type: 'input',
          templateOptions: {
            label: 'global.form_fields.personal.firstname',
            floatLabel: false,
            translate: true,
            required: true,
            addonLeft: {
              icon: 'face',
            },
          },
        },
        {
          key: 'input4',
          type: 'input',
          templateOptions: {
            label: 'global.form_fields.personal.firstname',
            floatLabel: false,
            translate: true,
            required: true,
            addonLeft: {
              icon: 'face',
            },
          },
        },
      ],
    };
  }
}
