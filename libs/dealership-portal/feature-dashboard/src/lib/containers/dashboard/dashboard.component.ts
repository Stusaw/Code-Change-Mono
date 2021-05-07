import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
