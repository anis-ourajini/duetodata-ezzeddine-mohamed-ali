import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './containers/display/display.component';
import { DashboardInterfaceComponent } from './dashboard-interface/dashboard-interface.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardInterfaceComponent,
    children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'display' },
      {
        path: 'display',
        component: DisplayComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
