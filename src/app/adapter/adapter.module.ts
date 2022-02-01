import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleAdapterComponent } from './schedule-adapter/schedule-adapter.component';
import {SharedModule} from "../shared/shared.module";
import { GraphAdapterComponent } from './graph-adapter/graph-adapter.component';
import { IncidentAdapterComponent } from './incident-adapter/incident-adapter.component';
import { StatsPeriodAdapterComponent } from './stats-period-adapter/stats-period-adapter.component';
import { PlayerAdapterComponent } from './player-adapter/player-adapter.component';
import { BetPeriodsAdapterComponent } from './bet-periods-adapter/bet-periods-adapter.component';



@NgModule({
    declarations: [
        ScheduleAdapterComponent,
        GraphAdapterComponent,
        IncidentAdapterComponent,
        StatsPeriodAdapterComponent,
        PlayerAdapterComponent,
        BetPeriodsAdapterComponent
    ],
    exports: [
        ScheduleAdapterComponent,
        GraphAdapterComponent,
        IncidentAdapterComponent,
        StatsPeriodAdapterComponent,
        PlayerAdapterComponent,
        BetPeriodsAdapterComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AdapterModule { }
