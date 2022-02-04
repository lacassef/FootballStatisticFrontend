import {Component, Input, OnInit} from '@angular/core';
import {Schedule, tournament} from "../../model/schedule";
import {NzModalService} from "ng-zorro-antd/modal";
import {MatchModalComponent} from "../../widget/match-modal/match-modal.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  @Input() schedules: Schedule[] = []
  matchId = 0
  constructor() { }

  ngOnInit(): void {
  }

  getAllTags(schedules: Schedule[]): string[]{
    return Array.from(new Set(schedules.map(
      ok=> {
        return ok.tournament.country
      }
    )))
  }

  getAllSchedulesFromTag(tag: string): Schedule[]{
    return this.schedules.filter(
      ok => (tag == ok.tournament.country)
    ).sort(
      (ok, ok2) => {
        if (Number(ok.time.substring(0, 2).concat(ok.time.substring(3)))>Number(ok2.time.substring(0, 2).concat(ok2.time.substring(3))) )
          return 1
        else return -1
      }
    )
  }

}
