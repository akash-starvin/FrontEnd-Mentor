import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTrackingComponent } from './time-tracking-dashboard/components/time-tracking/time-tracking.component';

const routes: Routes = [
  {
    path: 'time-tracking-dashboard',
    component: TimeTrackingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
