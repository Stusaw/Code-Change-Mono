import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
          <!-- <ion-menu-toggle auto-hide="false"></ion-menu-toggle> -->
        </ion-buttons>
        <div slot="start">
          <app-translate></app-translate>
        </div>

        <ion-buttons slot="end">
          <ion-button color="primary">
            <ion-icon
              slot="start"
              size="large"
              name="person-circle-outline"
            ></ion-icon>
          </ion-button>
          <ion-button color="primary">
            <ion-icon slot="start" size="large" name="exit-sharp"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
