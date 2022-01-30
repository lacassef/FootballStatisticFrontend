import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import {SharedModule} from "../shared/shared.module";
import {AdapterModule} from "../adapter/adapter.module";
import { LeagueListComponent } from './league-list/league-list.component';
import { MatchHeaderComponent } from './match-header/match-header.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { LastMatchesComponent } from './last-matches/last-matches.component';
import { HeadMatchesComponent } from './head-matches/head-matches.component';
import { MatchStatisticsComponent } from './match-statistics/match-statistics.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { TeamPerformanceComponent } from './team-performance/team-performance.component';



@NgModule({
    declarations: [
        SchedulesListComponent,
        LeagueListComponent,
        MatchHeaderComponent,
        MatchDetailsComponent,
        LastMatchesComponent,
        HeadMatchesComponent,
        MatchStatisticsComponent,
        PlayersListComponent,
        TeamPerformanceComponent
    ],
  exports: [
    LeagueListComponent,
    MatchHeaderComponent,
    MatchDetailsComponent,
    LastMatchesComponent,
    HeadMatchesComponent,
    MatchStatisticsComponent,
    TeamPerformanceComponent,
    PlayersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdapterModule
  ]
})
export class WidgetModule { }
