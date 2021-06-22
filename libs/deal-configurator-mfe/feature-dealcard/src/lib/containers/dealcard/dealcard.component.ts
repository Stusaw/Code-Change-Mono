import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'dealcard',
  template: `
    <ion-content>
      <div
        fxLayout="row"
        fxLayoutAlign="space-evenly stretch"
        fxLayoutGap="10px"
      >
        <div fxFlex>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Personal Information</ion-card-title>
            </ion-card-header>

            <ion-card-content> </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Vehicle Information</ion-card-title>
            </ion-card-header>

            <ion-card-content> </ion-card-content>
          </ion-card>
        </div>
      </div>
      <div
        fxLayout="row"
        fxLayoutAlign="space-evenly stretch"
        fxLayoutGap="10px"
      >
        <div fxFlex>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Get a Finance Quote</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>
                <a mat-flat-button color="primary"
                  [routerLink]="['finance']"
                  queryParamsHandling="preserve"
                  routerLinkActive="router-link-active"
                  >Go to Finance</a
                >
              </p>
              <button mat-raised-button color="primary">Quote</button>
            </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Comprehensive Motor Insurance</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>
                <a
                  [routerLink]="['mvi']"
                  queryParamsHandling="preserve"
                  routerLinkActive="router-link-active"
                  >Go to mvi</a
                >
              </p>
            </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Get an Insurance Quote</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>
                <a
                  [routerLink]="['insurance']"
                  queryParamsHandling="preserve"
                  routerLinkActive="router-link-active"
                  >Go to insurance</a
                >
              </p>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
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
