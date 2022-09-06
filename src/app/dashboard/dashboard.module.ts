import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule  } from 'ng2-charts';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardInterfaceComponent } from './dashboard-interface/dashboard-interface.component';
import { DisplayComponent } from './containers/display/display.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    DashboardInterfaceComponent,
    DisplayComponent,
    PostComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
