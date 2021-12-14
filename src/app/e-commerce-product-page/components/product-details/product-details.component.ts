import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() details: any;
  actualPrice: any;

  constructor() {}

  ngOnInit(): void {
    this.actualPrice = this.calculateActualPrice(this.details.price, this.details.discount);
  }

  calculateActualPrice(price: number, discount: number) {
    return (price * (discount / 100)).toFixed(2);;
  }
}
