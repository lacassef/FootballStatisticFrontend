import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";
import {PeriodsBet} from "../../model/periods-bet";

@Component({
  selector: 'app-betting-periods',
  templateUrl: './betting-periods.component.html',
  styleUrls: ['./betting-periods.component.css']
})
export class BettingPeriodsComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getTeamBettingPeriods(match.home.id).subscribe(
      ok => {
        this.home = ok
        this.none = false
        this.http.getTeamBettingPeriods(match.away.id).subscribe(
          ok => {
            this.away = ok
            this.none = false
          },
          () => {
            this.none = true
          }
        )
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
    this.matchw = match
  }

  matchw: Schedule | undefined
  home: PeriodsBet |undefined
  away: PeriodsBet |undefined
  none = true

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

}
