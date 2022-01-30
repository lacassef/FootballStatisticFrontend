import {Component, Input, OnInit} from '@angular/core';
import {playersItem} from "../../model/schedule-line";

@Component({
  selector: 'app-player-adapter',
  templateUrl: './player-adapter.component.html',
  styleUrls: ['./player-adapter.component.css']
})
export class PlayerAdapterComponent implements OnInit {

  @Input() player: playersItem | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
