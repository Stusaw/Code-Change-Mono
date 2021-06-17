import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  template: `
    <ion-content>
      <app-header></app-header>
      <div id="container">
        <h1>Welcome to dealership-portal!</h1>
        <strong>
          <a routerLink="/mfe">Link to a remote micro-frontend?</a></strong
        >
        <p>
          <a routerLink="/dashboard">Dashboard</a>
        </p>

        <p>{{ 'feature-home' | translate }}</p>

        <mat-card>
          <mat-card-title>Standard Form Elements</mat-card-title>
          <mat-card-content>
            <form
              fxLayout="column"
              fxLayoutAlign="center none"
              [formGroup]="form"
            >
              <formly-form
                [form]="form"
                [fields]="fields"
                [model]="model"
              ></formly-form>
            </form>
            <button [disabled]="form.invalid" mat-raised-button>
              {{ 'global.actions.login' | translate }}
            </button>
          </mat-card-content>
        </mat-card>
      </div>
    </ion-content>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
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
        key: 'input',
        type: 'input',
        templateOptions: {
          label: 'global.form_fields.personal.firstname',
          floatLabel: false,
          translate: true,
          required: true,
          addonLeft: {
            icon: 'face',
          }
        },
      },
      {
        key: 'select',
        type: 'select',
        templateOptions: {
          label: 'Select',
          placeholder: 'Placeholder',
          required: true,
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
      {
        key: 'radio',
        type: 'radio',
        templateOptions: {
          label: 'Radio',
          placeholder: 'Placeholder',
          required: true,
          appearance: 'never',
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4', disabled: true },
          ],
        },
      },
      {
        key: 'toggle',
        type: 'toggle',
        templateOptions: {
          label: 'Toggle label',
          required: true,
          appearance: 'never'
        },
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
          label: 'Accept terms',
          description: 'In order to proceed, please accept terms',
          pattern: 'true',
          required: true,
          appearance: 'never',
        },
        validation: {
          messages: {
            pattern: 'Please accept the terms',
          },
        },
      },
      {
        key: 'datepicker',
        type: 'datepicker',
        templateOptions: {
          label: 'Datepicker',
          placeholder: 'Placeholder',
          required: true,
        },
      },
      {
        key: 'slider',
        type: 'slider',
        templateOptions: {
          label: 'Slider label',
          required: true,
          appearance: 'never',
        },
      }
    ];
  }
}
