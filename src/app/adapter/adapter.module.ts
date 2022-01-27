import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleAdapterComponent } from './schedule-adapter/schedule-adapter.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        ScheduleAdapterComponent
    ],
    exports: [
        ScheduleAdapterComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AdapterModule { }
