import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  template: `
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1>Welcome to dealership-portal!</h1>
        <p>Home - This is a feature library from the mono-repo!</p>
        <strong>
          <a routerLink="/mfe">Link to a remote micro-frontend?</a></strong
        >
        <p>
          <a routerLink="/dashboard">Dashboard</a>
        </p>

        <mat-card>
          <mat-card-title>Login</mat-card-title>
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
            <button [disabled]="form.invalid" mat-raised-button>login</button>
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
          label: 'Input',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
        },
      },
      {
        key: 'input2',
        type: 'input',
        templateOptions: {
          label: 'Input 2',
          placeholder: 'Placeholder',
          description: 'Description',
          required: true,
        },
      },
    ];
  }
}
