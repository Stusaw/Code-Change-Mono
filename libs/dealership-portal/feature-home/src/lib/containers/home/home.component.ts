import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ion-content [fullscreen]="true">
      <app-header></app-header>
      <div id="container">
        
      </div>
    </ion-content>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.configure();
  }

  configure() {}
}
