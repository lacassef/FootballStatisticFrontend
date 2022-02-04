import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {BackendService} from "../../backend.service";
import {interval, Subscription} from "rxjs";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.css']
})
export class MatchModalComponent implements OnInit {

  @Input() set matchId(match: number){
    if (match > 0) this.http.getMatch(match).subscribe(
      ok => {
        this.match = ok
        this.none = false
        if(!(ok.status===100||ok.status===120||ok.status===110||ok.status===0)) this.checkNewValues
          = this.timer.subscribe(
          ok => this.checkValue()
        )
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
  }

  timer = interval(25000)
  checkNewValues: Subscription | undefined
  // @Output() onMatchIdChange: EventEmitter<number> = new EventEmitter<number>()
  match: Schedule | undefined
  none = true

  constructor(private http: BackendService, private modal: NzModalRef) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.destroy();
  }
  checkValue(){
    if(this.match) this.http.getMatch(this.match.id).subscribe(
      ok => {
        this.match = ok
        this.none = false
      },
      () => {
        this.none = true
      }
    )
  }

}
