import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'code-change-dealcard',
  templateUrl: './dealcard.component.html',
  styleUrls: ['./dealcard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
