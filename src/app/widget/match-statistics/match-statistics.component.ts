import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";
import {ScheduleStatistics} from "../../model/schedule-statistics";

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
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
    this.matchw = match
  }

  matchw: Schedule | undefined
  stats: ScheduleStatistics | undefined
  none = true

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

}
