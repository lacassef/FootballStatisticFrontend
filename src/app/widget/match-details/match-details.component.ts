import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  @Input() match: Schedule | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
