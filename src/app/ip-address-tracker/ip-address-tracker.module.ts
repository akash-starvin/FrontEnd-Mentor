import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpAddressTrackerRoutingModule } from './ip-address-tracker-routing.module';
import { TrackerHomeComponent } from './component/tracker-home/tracker-home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrackerHomeComponent
  ],
  imports: [
    CommonModule,
    IpAddressTrackerRoutingModule,
    FormsModule
  ]
})
export class IpAddressTrackerModule { }
