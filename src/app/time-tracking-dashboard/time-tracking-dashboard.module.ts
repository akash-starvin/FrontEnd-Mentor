import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingComponent } from './components/time-tracking/time-tracking.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HoursPipe } from './pipes/hours.pipe';

@NgModule({
  declarations: [
    ProfileCardComponent,
    EventCardComponent,
    TimeTrackingComponent,
    HoursPipe,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [TimeTrackingComponent, ProfileCardComponent, EventCardComponent],
})
export class TimeTrackingDashboardModule {}
