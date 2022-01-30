import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";
import {TeamStatistics} from "../../model/team-statistics";

@Component({
  selector: 'app-team-performance',
  templateUrl: './team-performance.component.html',
  styleUrls: ['./team-performance.component.css']
})
export class TeamPerformanceComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getTeamStatistics(match.home.id, match.tournament.id,
      match.tournament.season).subscribe(
      ok => {
        this.home = ok
        this.none = false
        this.http.getTeamStatistics(match.away.id, match.tournament.id, match.tournament.season).subscribe(
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
  home: TeamStatistics | undefined
  away: TeamStatistics | undefined
  none = true

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

}
