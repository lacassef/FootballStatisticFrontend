import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {playersItem} from "../../model/schedule-line";
import {PlayerPerformanceComponent} from "../../widget/player-performance/player-performance.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-player-adapter',
  templateUrl: './player-adapter.component.html',
  styleUrls: ['./player-adapter.component.css']
})
export class PlayerAdapterComponent implements OnInit {

  @Input() player: playersItem | undefined
  @Input() match: Schedule | undefined
  @Output() playerIsClicked = new EventEmitter<playersItem>()
  constructor() { }

  playerClicked(pl: playersItem){
    this.playerIsClicked.emit(pl)
  }

  ngOnInit(): void {
  }
  getPosition(position: string = 'A', reason: number=-1): string{
    if(position==='G') return 'Goleiro'
    else if(position==='D') return 'Defesa'
    else if(position==='M') return 'Medio'
    else if(position==='F') return 'Atacante'
    else if(reason == 13) return 'Suspenso'
    else if(reason == 1) return 'Lesionado'
    else if(reason == 3) return 'Suspenso'
    else if(reason == 0) return 'Seleção'
    else if(reason == 99) return 'Duvida'
    else return 'Sem posição'
  }
  /**
   * case 13:
   return "estar suspenso"
   case 1:
   return "estar lesionado"
   case 3:
   return "estar suspenso"
   case 99:
   return "ser duvida"
   default:
   return ""**/

}
