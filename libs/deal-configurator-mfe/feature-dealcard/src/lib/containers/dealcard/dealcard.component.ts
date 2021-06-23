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
        gdAreas="header header | side content | footer footer"
        gdGap="16px"
        gdRows="auto auto auto"
        gdAreas.lt-md="header | side | content | footer"
        gdRows.lt-md="auto auto auto auto"
        gdColumns.lt-md="auto 10px auto auto"
      >
        <div gdArea="header">Header</div>
        <div gdArea="side">Side</div>
        <div gdArea="content">Content</div>
        <div gdArea="footer">Footer</div>
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
