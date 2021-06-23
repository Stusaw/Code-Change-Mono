import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'code-change-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
