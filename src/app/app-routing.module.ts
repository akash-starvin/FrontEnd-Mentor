import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTrackingComponent } from './time-tracking-dashboard/components/time-tracking/time-tracking.component';
import { TipCalculatorComponent } from './tip-calculator/components/tip-calculator/tip-calculator.component';

const routes: Routes = [
  {
    path: 'time-tracking-dashboard',
    component: TimeTrackingComponent,
  },
  {
    path: 'tip-calculator',
    component: TipCalculatorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
