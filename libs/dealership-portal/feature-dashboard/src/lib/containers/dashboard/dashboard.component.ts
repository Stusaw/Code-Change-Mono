import { Component, OnInit } from '@angular/core';

@Component({
  // templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.scss'],
  template: `
          <p>Dashboard - This is a feature library from the mono-repo</p>
          <a [routerLink]="['/home']">Home</a>
          <p>{{'feature-dashboard' | translate }}</p>
          <app-translate></app-translate>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
