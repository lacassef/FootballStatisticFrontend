import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-match-header',
  templateUrl: './match-header.component.html',
  styleUrls: ['./match-header.component.css']
})
export class MatchHeaderComponent implements OnInit {

  @Input() match: Schedule | undefined
  @Output() onClickClose: EventEmitter<void> = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  closeIsClicked() {
    this.onClickClose.emit()
  }
}
