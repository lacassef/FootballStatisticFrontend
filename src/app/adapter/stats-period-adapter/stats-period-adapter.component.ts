import {Component, Input, OnInit} from '@angular/core';
import {periodsItem} from "../../model/schedule-statistics";

@Component({
  selector: 'app-stats-period-adapter',
  templateUrl: './stats-period-adapter.component.html',
  styleUrls: ['./stats-period-adapter.component.css']
})
export class StatsPeriodAdapterComponent implements OnInit {

  @Input() period: periodsItem | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
