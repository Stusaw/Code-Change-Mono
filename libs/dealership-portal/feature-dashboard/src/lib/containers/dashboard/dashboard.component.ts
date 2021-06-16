import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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
      </div>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
