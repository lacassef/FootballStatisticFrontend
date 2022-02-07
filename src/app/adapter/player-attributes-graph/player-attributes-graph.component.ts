import {Component, Input, OnInit} from '@angular/core';
import {PlayerAttributes} from "../../model/player-attributes";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-player-attributes-graph',
  templateUrl: './player-attributes-graph.component.html',
  styleUrls: ['./player-attributes-graph.component.css']
})
export class PlayerAttributesGraphComponent implements OnInit {

  @Input() set attribute(attribute: PlayerAttributes){
    if (attribute.player.position!=='G')
      this.radarChartData = {
        labels: ['Ataque', 'Técnica', 'Tática', 'Defesa', 'Criatividade'],
        datasets: [
          { data: [ attribute.player.attacking, attribute.player.technical, attribute.player.tactical
              , attribute.player.defending, attribute.player.creativity ], label: 'Jogador' },
          { data: [ attribute.average.attacking, attribute.average.technical, attribute.average.tactical
              , attribute.average.defending, attribute.average.creativity ], label: 'Normal' }
        ]
      }; else this.radarChartData = {
      labels: ['Defesas', 'Antecipação', 'Tática', 'Distribuição', 'Aereo'],
      datasets: [
        { data: [ attribute.player.saves, attribute.player.anticipation, attribute.player.tactical
            , attribute.player.ballDistribution, attribute.player.aerial ], label: 'Jogador' },
        { data: [ attribute.average.saves, attribute.average.anticipation, attribute.average.tactical
            , attribute.average.ballDistribution, attribute.average.aerial], label: 'Normal' }
      ]
    };
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartData: ChartData<'radar'> | undefined
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
