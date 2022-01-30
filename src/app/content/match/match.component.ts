import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() set matchId(match: number){
    if (match > 0) this.http.getMatch(match).subscribe(
      ok => {
        this.match = ok
        this.none = false
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
  }

  @Output() onMatchIdChange: EventEmitter<number> = new EventEmitter<number>()
  match: Schedule | undefined
  none = true

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

  close() {
    this.onMatchIdChange.emit(0)
    this.match = undefined
    this.none = true
  }
}
