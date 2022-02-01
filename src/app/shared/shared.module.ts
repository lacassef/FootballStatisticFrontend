import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzListModule} from "ng-zorro-antd/list";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NgChartsModule} from "ng2-charts";
import {NzBreadCrumbComponent, NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTimelineModule} from "ng-zorro-antd/timeline";
import {NzEmptyModule} from "ng-zorro-antd/empty";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDatePickerModule,
    NzBadgeModule,
    NzDividerModule,
    NzCardModule,
    NzListModule,
    NzTypographyModule,
    NgChartsModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzTableModule,
    NzAvatarModule,
    NzAffixModule,
    NzButtonModule,
    NzGridModule,
    NzTabsModule,
    NzTimelineModule,
    NzEmptyModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDatePickerModule,
    NzBadgeModule,
    NzDividerModule,
    NzCardModule,
    NzListModule,
    NzTypographyModule,
    NgChartsModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzTableModule,
    NzAvatarModule,
    NzAffixModule,
    NzButtonModule,
    NzGridModule,
    NzTabsModule,
    NzTimelineModule,
    NzEmptyModule
  ],
})
export class SharedModule { }
