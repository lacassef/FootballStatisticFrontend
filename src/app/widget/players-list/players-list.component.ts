import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";
import {playersItem, ScheduleLine} from "../../model/schedule-line";
import {sum} from "ng-zorro-antd/core/util";
import {NzModalService} from "ng-zorro-antd/modal";
import {MatchModalComponent} from "../match-modal/match-modal.component";
import {PlayerPerformanceComponent} from "../player-performance/player-performance.component";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getMatchLines(match.id).subscribe(
      ok => {
        this.line = ok
        this.none = false
        this.linesH = this.getLines(ok.home.players, ok.home.lines)
        this.linesA = this.getLines(ok.away.players, ok.away.lines)
        this.linesHSub = this.getSubstitutes(ok.home.players)
        this.linesASub = this.getSubstitutes(ok.away.players)
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
    this.matchw = match
  }
  @Output() playerIClicked = new EventEmitter<playersItem>()
  matchw: Schedule | undefined
  line: ScheduleLine | undefined
  none = true
  linesH: Array<playersItem[]> = []
  linesA: Array<playersItem[]> = []
  linesHSub: playersItem[] = []
  linesASub: playersItem[] = []

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

  getLines(players: Array<playersItem>, lNumbers: number[]): Array<playersItem[]>{
    let lines: Array<playersItem[]> = []
    for (let i = 0; i < lNumbers.length; i++) {
      lines.push(
        players.slice(sum(lNumbers.slice(0, i)), sum(lNumbers.slice(0, i)) + lNumbers[i])
      )
    }
    console.log(lines)
    return lines
  }

  getSubstitutes(players: Array<playersItem>): playersItem[] {
    return players.filter( ok=> (ok.substitute))
  }

  playerIsClicked($event: playersItem) {
    this.playerIClicked.emit($event)
  }
}
