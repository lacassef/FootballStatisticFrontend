import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {ScheduleGraph} from "../../model/schedule-graph";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-last-matches',
  templateUrl: './last-matches.component.html',
  styleUrls: ['./last-matches.component.css']
})
export class LastMatchesComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getTeamLastMatches(match.home.id).subscribe(
      ok => {
        this.home = ok
        this.none = false
        this.http.getTeamLastMatches(match.away.id).subscribe(
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
  home: Schedule[] = []
  away: Schedule[] = []
  none = true

  @Output() matchIsSelected: EventEmitter<number> = new EventEmitter<number>()
  emitEvent(id: number){
    this.matchIsSelected.emit(id)
  }

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

}
