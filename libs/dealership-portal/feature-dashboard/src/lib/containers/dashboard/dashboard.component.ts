import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  // templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.scss'],
  template: `
          <p>Dashboard - This is a feature library from the mono-repo</p>
          <a [routerLink]="['/home']">Home</a>

          <mat-card>
            <mat-card-title>Login</mat-card-title>
            <mat-card-content>
              <form fxLayout="column" fxLayoutAlign="center none">
                <mat-form-field>
                  <input matInput placeholder="username" type="text" #username />
                </mat-form-field>
                <mat-form-field>
                  <input matInput placeholder="password" type="text" #password />
                </mat-form-field>
              </form>
              <button mat-raised-button>login</button>
            </mat-card-content>
          </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
