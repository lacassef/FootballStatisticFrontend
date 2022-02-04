import {Component, Input, OnInit} from '@angular/core';
import {playersItem} from "../../model/schedule-line";
import {PlayerStatistics} from "../../model/player-statistics";
import {PlayerLastRatings} from "../../model/player-last-ratings";
import {PlayerAttributes} from "../../model/player-attributes";
import {BackendService} from "../../backend.service";
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-player-performance',
  templateUrl: './player-performance.component.html',
  styleUrls: ['./player-performance.component.css']
})
export class PlayerPerformanceComponent implements OnInit {

  @Input() match: Schedule | undefined
  @Input() player: playersItem | undefined

  pl: playersItem | undefined
  performance: PlayerStatistics | undefined
  lastRatings: PlayerLastRatings[] | undefined
  attributes: PlayerAttributes | undefined
  useOwnPerformance: boolean = false
  constructor(private backend: BackendService) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  getPosition(position: string): string{
    if(position==='G') return 'Goleiro'
    else if(position==='D') return 'Defesa'
    else if(position==='M') return 'Medio'
    else if(position==='F') return 'Atacante'
    else return 'Sem posição'
  }

  loadData(){
    if(this.player&&this.match){

      if(this.player.statistics.rating === 0) this.backend.getPlayerStatistics(this.player.id, this.match.tournament.id, this.match.tournament.season)
        .subscribe(ok => this.performance = ok)
      else this.useOwnPerformance = true

      this.backend.getPlayerAttributes(this.player.id, this.player.position)
        .subscribe(ok => this.attributes = ok)

      this.backend.getPlayerLastRatings(this.player.id, this.match.tournament.id, this.match.tournament.season)
        .subscribe(ok => this.lastRatings = ok)
    }
    else{
      setTimeout(() => this.loadData(), 250);
    }
  }
}
