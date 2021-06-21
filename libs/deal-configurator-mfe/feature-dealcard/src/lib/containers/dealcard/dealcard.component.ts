import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

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

            <ion-card-content>
              {{ data.deal }}
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  `,
  styleUrls: ['./dealcard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealcardComponent implements OnInit, OnDestroy {
  public data: any;
  private subs = new SubSink();

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.configure();
  }

  configure() {
    //Store view model
    this.subs.sink = this._activatedRoute.data.subscribe(
      (data) => (this.data = data)
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
