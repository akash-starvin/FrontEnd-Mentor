import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit {

  btnPercentageValues : number[] = [5,10,15,20,50];

  billAmount = new FormControl('');
  customAmount = new FormControl('');
  noOfPeople = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
