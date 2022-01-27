import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-schedule-adapter',
  templateUrl: './schedule-adapter.component.html',
  styleUrls: ['./schedule-adapter.component.css']
})
export class ScheduleAdapterComponent implements OnInit, OnDestroy {

  @Input() schedule: Schedule | undefined
  current = "0"
  agenda: Subscription| undefined
  timer = interval(1000)
  constructor() { }

  ngOnInit(): void {
    this.updateMinute()
    this.agenda = this.timer.subscribe(
      ok => this.updateMinute()
    )
  }
  updateMinute(){
    let now = new Date()
    if (this.schedule!!.live.period == -45) this.current = "HT"
      else if (this.schedule!!.live.period == -90) this.current = "FT"
      else if (this.schedule!!.live.period == -99) this.current = "EX1"
      else if (this.schedule!!.live.period == -105) this.current = "EX2"
      else if (this.schedule!!.live.period == -120) this.current = "EX"
    else if (this.schedule!!.live.period == -999) this.current = "PEN"
    else this.current = Math.round(this.schedule!!.live.period + (now.getTime()
      - this.schedule!!.live.periodStart)/60000).toString()
  }

  ngOnDestroy(): void {
  this.agenda?.unsubscribe()
  }
}
