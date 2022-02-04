import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-head-matches',
  templateUrl: './head-matches.component.html',
  styleUrls: ['./head-matches.component.css']
})
export class HeadMatchesComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getHead2Head(match.customId).subscribe(
      ok => {
        this.head = ok
        this.none = false
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
    this.matchw = match
  }

  @Output() matchIsSelected: EventEmitter<number> = new EventEmitter<number>()
  emitEvent(id: number){
    this.matchIsSelected.emit(id)
  }
  matchw: Schedule | undefined
  head: Schedule[] = []
  none = true

  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

}
