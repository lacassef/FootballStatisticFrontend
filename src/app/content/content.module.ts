import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {WidgetModule} from "../widget/widget.module";
import {RouterModule, Routes} from "@angular/router";
import {SchedulesListComponent} from "../widget/schedules-list/schedules-list.component";
import {SharedModule} from "../shared/shared.module";
import { MatchComponent } from './match/match.component';
import {AdapterModule} from "../adapter/adapter.module";

const routes: Routes = [
  {path: '', component: SchedulesListComponent},
]

@NgModule({
  declarations: [
    IndexComponent,
    MatchComponent
  ],
  exports: [
    IndexComponent
  ],
    imports: [
        CommonModule,
        WidgetModule,
        SharedModule,
        RouterModule.forRoot(routes),
        AdapterModule
    ]
})
export class ContentModule { }
