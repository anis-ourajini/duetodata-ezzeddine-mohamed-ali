import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule  } from 'ng2-charts';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardInterfaceComponent } from './dashboard-interface/dashboard-interface.component';
import { DisplayComponent } from './containers/display/display.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { ChartComponent } from './components/chart/chart.component';
import { CommentviewComponent } from './components/commentview/commentview.component';
import { PostviewComponent } from './containers/postview/postview.component';


@NgModule({
  declarations: [
    DashboardInterfaceComponent,
    DisplayComponent,
    PostComponent,
    ChartComponent,
    CommentviewComponent,
    PostviewComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    DashboardRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class DashboardModule { }
