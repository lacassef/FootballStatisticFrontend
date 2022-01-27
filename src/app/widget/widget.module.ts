import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import {SharedModule} from "../shared/shared.module";
import {AdapterModule} from "../adapter/adapter.module";
import { LeagueListComponent } from './league-list/league-list.component';



@NgModule({
    declarations: [
        SchedulesListComponent,
        LeagueListComponent
    ],
    exports: [
        LeagueListComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    AdapterModule
  ]
})
export class WidgetModule { }
