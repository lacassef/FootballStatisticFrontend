import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";
import {ScheduleStatistics} from "../../model/schedule-statistics";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-match-statistics',
  templateUrl: './match-statistics.component.html',
  styleUrls: ['./match-statistics.component.css']
})
export class MatchStatisticsComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getMatchStatistics(match.id).subscribe(
      ok => {
        this.stats = ok
        this.none = false
        // if(!(match.status==100||match.status==120||match.status==110||match.status==0))
        //   this.checkNewValues = this.timer.subscribe(
        //     ok => this.checkValue()
        //   )
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
    this.matchw = match
  }

  timer = interval(25000)
  checkNewValues: Subscription | undefined
  matchw: Schedule | undefined
  stats: ScheduleStatistics | undefined
  none = true

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

  checkValue(){
    if(this.matchw) this.http.getMatchStatistics(this.matchw.id).subscribe(
      ok => {
        this.stats = ok
        this.none = false
      },
      () => {
        this.none = true
      }
    )
  }
}
