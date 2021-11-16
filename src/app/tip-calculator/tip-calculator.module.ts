import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { TipAmountCardComponent } from './components/tip-amount-card/tip-amount-card.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TipCalculatorComponent,
    TipAmountCardComponent,
    PercentagePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TipCalculatorComponent,
    TipAmountCardComponent
  ]
})
export class TipCalculatorModule { }
