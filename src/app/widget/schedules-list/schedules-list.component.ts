import {Component, Input, OnInit} from '@angular/core';
import {Schedule, tournament} from "../../model/schedule";

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.css']
})
export class SchedulesListComponent implements OnInit {

  @Input() schedules: Schedule[] = []

  constructor() { }

  ngOnInit(): void {
  }

  getAllSchedules(schedules: Schedule[]): Schedule[]{
    return this.schedules.sort(
      (ok, ok2) => {
        if (Number(ok.time.substring(0, 2).concat(ok.time.substring(3)))>Number(ok2.time.substring(0, 2).concat(ok2.time.substring(3))) )
          return 1
        else return -1
      }
    )
  }
}
