import {Component, Input, OnInit} from '@angular/core';
import {PeriodsBet} from "../../model/periods-bet";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {sum} from "ng-zorro-antd/core/util";

@Component({
  selector: 'app-bet-periods-adapter',
  templateUrl: './bet-periods-adapter.component.html',
  styleUrls: ['./bet-periods-adapter.component.css']
})
export class BetPeriodsAdapterComponent implements OnInit {

  @Input() set periods(periods: PeriodsBet){
    let p = sum([periods.graph.pone, periods.graph.ptwo, periods.graph.pthree, periods.graph.pfour,
      periods.graph.pfive, periods.graph.psix])
    let g = sum([periods.goals.pone, periods.goals.ptwo, periods.goals.pthree, periods.goals.pfour,
      periods.goals.pfive, periods.goals.psix])
    let gAgg = sum([periods.goalsAgg.pone, periods.goalsAgg.ptwo, periods.goalsAgg.pthree,
      periods.goalsAgg.pfour, periods.goalsAgg.pfive, periods.goalsAgg.psix])
   let a = [periods.graph.pone*100/p, periods.graph.ptwo*100/p, periods.graph.pthree*100/p,
     periods.graph.pfour*100/p, periods.graph.pfive*100/p, periods.graph.psix*100/p]
    let b = [periods.goals.pone*100/g, periods.goals.ptwo*100/g, periods.goals.pthree*100/g,
      periods.goals.pfour*100/g, periods.goals.pfive*100/g, periods.goals.psix*100/g]
    let c = [periods.goalsAgg.pone*100/gAgg, periods.goalsAgg.ptwo*100/gAgg, periods.goalsAgg.pthree*100/gAgg,
      periods.goalsAgg.pfour*100/gAgg, periods.goalsAgg.pfive*100/gAgg, periods.goalsAgg.psix*100/gAgg]
    this.barChartData = {
      labels: ['1-15', '16-30', '31-45', '46-60', '61-75', '76-90'],
      datasets: [
        { data: a, label:  ('% pressão (Total: '+Math.round(p)+')')},
        { data: b, label:  ('% golos (Total: '+g+')')},
        { data: c, label:  ('% golos sofridos (Total: '+gAgg+')')}
      ]
    };
  }

  public barChartLegend = true;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        display: false,
      },
      y: {
        min:0,
        display: false
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> | undefined

  constructor() { }

  ngOnInit(): void {

  }

}
