import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'dealcard',
  template: `
    <ion-content>
      <div
        fxLayout="row wrap"
        fxLayout.xs="column"
        fxLayoutAlign="center"
        fxFlex.gt-md="80"
        fxFlexOffset.gt-md="10"
      >
        <div fxFlex="50" fxHide.xs="true">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Personal Information</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex="50" fxFlex.xs="100" >
          <ion-card>
            <ion-card-header fxHide.xs="true">
              <ion-card-title>Vehicle Spec</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <img src="assets/shapes.svg">
            </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex="33.3">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Get a Finance Quote</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <strong>Typical Finance on this vehicle could be from as little as:</strong>
              <a fxFill mat-raised-button color="primary" [routerLink]="['finance']"
                >Get Quote</a
              >
            </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex="33.3">
          <ion-card>
            <ion-card-header>
              <ion-card-title>NEW - Motor Insurance</ion-card-title>
            </ion-card-header>

            <ion-card-content>
            <strong>Typical Finance on this vehicle could be from as little as:</strong>
              <a fxFill
                mat-raised-button
                color="primary"
                [routerLink]="['motor-insurance']"
                >Get Quote</a
              >
            </ion-card-content>
          </ion-card>
        </div>
        <div fxFlex="33.3">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Get Insurance Quote</ion-card-title>
            </ion-card-header>

            <ion-card-content>
            <strong>Typical Finance on this vehicle could be from as little as:</strong>
              <a fxFill mat-raised-button color="primary" [routerLink]="['insurance']"
                >Get Quote</a
              >
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
