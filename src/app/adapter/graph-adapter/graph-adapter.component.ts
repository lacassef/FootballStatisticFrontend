import {Component, Input, OnInit} from '@angular/core';
import {ScheduleGraph} from "../../model/schedule-graph";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BackendService} from "../../backend.service";
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-graph-adapter',
  templateUrl: './graph-adapter.component.html',
  styleUrls: ['./graph-adapter.component.css']
})
export class GraphAdapterComponent implements OnInit {

  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getMatchGraph(match.id).subscribe(
      ok => {
        this.graph = ok
        this.putGraph()
        this.none = false
      },
      () => {
        this.none = true
      }
    )
    else this.none = true
    this.matchw = match
  }

  matchw: Schedule | undefined
  graph: ScheduleGraph | undefined
  none = true
  points: string[] = []
  public barChartLegend = true;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min:0,
        max: 90.5,
        display: false,
      },
      y: {
        min:-150,
        max: 150,
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
  constructor(private http: BackendService) { }

  ngOnInit(): void {
    for (let i = 0; i < 90; i++) {
      this.points.push((i+1).toString())
      if(i+1===45) this.points.push((45.5).toString())
      if(i+1===90) this.points.push((90.5).toString())
    }

  }
  getPoints(positive: boolean): number[]{
    let ok: number[] = []
    for (const point of this.points) {
      if(this.graph) {
        let a = this.graph.points.filter(ok => ok.minute == Number(point))
        if (a.length === 0) ok.push(0)
        if (a.length === 1) {
          if (positive && a[0].point > 0) ok.push(a[0].point)
          if (positive && a[0].point < 0) ok.push(0)
          if (!positive && a[0].point < 0) ok.push(a[0].point)
          if (!positive && a[0].point > 0) ok.push(0)
          if (a[0].point === 0) ok.push(0)
        }
        if (a.length > 1) {
          if (positive && a[0].point > 0) ok.push(a[0].point)
          if (positive && a[0].point < 0) ok.push(0)
          if (!positive && a[0].point < 0) ok.push(a[0].point)
          if (!positive && a[0].point > 0) ok.push(0)
          if (a[0].point === 0) ok.push(0)
        }
      }
    }
    return ok
  }
  putGraph(){
    this.barChartData = {
      labels: this.points,
      datasets: [
        { data: this.getPoints(true), label:  this.matchw?.home.shortName},
        { data: this.getPoints(false), label:  this.matchw?.away.shortName}
      ]
    };
  }
}
