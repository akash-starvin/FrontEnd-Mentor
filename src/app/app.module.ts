import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeTrackingDashboardModule } from './time-tracking-dashboard/time-tracking-dashboard.module';
import { TipCalculatorModule } from './tip-calculator/tip-calculator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    TimeTrackingDashboardModule,
    TipCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
