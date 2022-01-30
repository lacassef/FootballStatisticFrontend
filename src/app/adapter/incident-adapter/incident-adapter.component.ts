import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";
import {ScheduleGraph} from "../../model/schedule-graph";
import {ScheduleIncident} from "../../model/schedule-incident";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-incident-adapter',
  templateUrl: './incident-adapter.component.html',
  styleUrls: ['./incident-adapter.component.css']
})
export class IncidentAdapterComponent implements OnInit {


  @Input() set match(match: Schedule){
    if (match.id > 0) this.http.getMatchIncidents(match.id).subscribe(
      ok => {
        this.incidents = ok
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
  incidents: ScheduleIncident[] | undefined
  none = true
  constructor(private http: BackendService) { }

  ngOnInit(): void {
  }

}
