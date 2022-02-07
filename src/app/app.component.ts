import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from "./backend.service";
import {Schedule} from "./model/schedule";
import {interval, Subscribable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FootballStatisticViewer';
  date = new Date();

  liveSchedules: Schedule[] = []
  nextSchedules: Schedule[] = []
  dateSchedules: Schedule[] = []
  timer = interval(60000)
  checkNewMatches: Subscription | undefined
  timerDate = interval(5*60000)
  checkDateMatches: Subscription | undefined
  selected = 3


  constructor(private backend: BackendService) {
  }
  onChange(result: Date): void {
    this.getDateMatches(result.getTime())
  }

  ngOnInit(): void {
    this.retrieveNewMatches()
    this.getDateMatches(this.date.getTime())
    this.checkNewMatches = this.timer.subscribe(
      ok => this.retrieveNewMatches()
    )
    this.checkDateMatches = this.timerDate.subscribe(
      ok => {
        if (this.date.toDateString() === new Date().toDateString())
          this.getDateMatches(this.date.getTime())
      }
    )
  }

  ngOnDestroy() {
    this.checkNewMatches?.unsubscribe()
  }

  retrieveNewMatches(){
    this.backend.getLiveSchedules().subscribe(
      ok => {
        this.liveSchedules = ok
        this.backend.getNextSchedules().subscribe(
          ok=> this.nextSchedules = ok
        )
      }
    )
  }
  getDateMatches(timestamp: number){
    this.backend.getSchedules(timestamp).subscribe(
      it =>
        this.dateSchedules = it
    )
  }

  selectNav(id: number){
    this.selected =id
  }

  getSchedules(selected: number): Schedule[] {
    // console.log(selected)
    if(selected == 1) return this.liveSchedules
    else if(selected == 2) return this.nextSchedules
    else return this.dateSchedules
  }
}
