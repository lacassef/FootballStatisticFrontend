import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule, tournament} from "../../model/schedule";

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent implements OnInit {

  @Input() schedules: Schedule[] = []
  @Output() onClickMatch: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  matchIsSelected(id: number){
    this.onClickMatch.emit(id)
  }

  getAllLeagues(schedules: Schedule[]): tournament[]{
    let tour: tournament[] = []
    schedules.forEach(
      ok =>{
        if (tour.filter(it =>ok.tournament.name == it.name).length==0){
          tour.push(ok.tournament)
        } else {
        }
      }
    )
    return tour.sort(
      (ok, ok2) => {
        if (Number(ok.id)>Number(ok2.id) )
          return 1
        else return -1
      }
    )
  }
  getAllSchedulesFromLeague(tag: string): Schedule[]{
    return this.schedules.filter(
      ok => (tag == ok.tournament.name)
    ).sort(
      (ok, ok2) => {
        if (Number(ok.time.substring(0, 2).concat(ok.time.substring(3)))>Number(ok2.time.substring(0, 2).concat(ok2.time.substring(3))) )
          return 1
        else return -1
      }
    )
  }

}
