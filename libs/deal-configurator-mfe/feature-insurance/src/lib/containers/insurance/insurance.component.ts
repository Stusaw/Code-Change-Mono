import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'dealcard-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceComponent implements OnInit {

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
