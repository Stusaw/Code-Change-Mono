import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-change-dealcard',
  template: `
        <ion-grid>
              <ion-row>
                  <ion-col>
                    <ion-card>
                        <ion-card-header>
                          <ion-card-subtitle>MFE</ion-card-subtitle>
                          <ion-card-title>This is a Mirco-frontend</ion-card-title>
                        </ion-card-header>

                        <p>{{'global' | translate }}</p>
                      
                        <ion-card-content>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                      </ion-card>
                  </ion-col>
              </ion-row>
        </ion-grid>
  `,
  styleUrls: ['./dealcard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
