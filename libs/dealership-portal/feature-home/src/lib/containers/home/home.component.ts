import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';

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
  states!: string[];
  constructor() {}

  ngOnInit(): void {
    this.configure();
  }

  filterStates(name: string) {
    return this.states.filter(
      (state) => state.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  configure() {
    this.states = [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District Of Columbia',
      'Federated States Of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palau',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Islands',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ];
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
          },
        },
      },
      {
        key: 'Autocomplete',
        type: 'autocomplete',
        templateOptions: {
          required: true,
          label: 'Autocomplete',
          placeholder: 'Placeholder',
          filter: (term: any) =>
            of(term ? this.filterStates(term) : this.states.slice()),
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
        key: 'select_multi',
        type: 'select',
        templateOptions: {
          label: 'Select Multiple',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
          multiple: true,
          translate: true,
          selectAllOption: 'Select All',
          options: [
            { value: "RunFlat", label: 'global.responses.yes' },
            { value: "NonRunFlat", label: 'global.responses.no' }
        ]
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
          appearance: 'never',
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
      },
    ];
  }
}
