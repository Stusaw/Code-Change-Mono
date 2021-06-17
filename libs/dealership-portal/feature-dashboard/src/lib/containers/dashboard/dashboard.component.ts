import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  // templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.scss'],
  template: `
    <ion-content>
      <app-header></app-header>
      <div id="container">
        <p>Dashboard - This is a feature library from the mono-repo</p>
        <a [routerLink]="['/home']">Home</a>
        <p>{{ 'feature-dashboard' | translate }}</p>

        <mat-card>
          <mat-card-title>Custom Form Elements</mat-card-title>
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
        key: 'input',
        type: 'input-field',
        wrappers: ['form-field'],
        templateOptions: {
          label: 'global.form_fields.vehicle.deposit',
          placeholder: 'global.form_fields.vehicle.deposit',
          hideLabel: true,
          translate: true,
          required: true,
          mask: "separator.2",
          addonLeft: {
            text: '$',
          },
        },
      }
    ];
  }
}
