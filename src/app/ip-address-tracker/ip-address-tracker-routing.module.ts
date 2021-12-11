import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerHomeComponent } from './component/tracker-home/tracker-home.component';

const routes: Routes = [
  {
    path: '',
    component: TrackerHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpAddressTrackerRoutingModule { }
