import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpAddressTrackerRoutingModule } from './ip-address-tracker-routing.module';
import { TrackerHomeComponent } from './component/tracker-home/tracker-home.component';


@NgModule({
  declarations: [
    TrackerHomeComponent
  ],
  imports: [
    CommonModule,
    IpAddressTrackerRoutingModule
  ]
})
export class IpAddressTrackerModule { }
