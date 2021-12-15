import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() details: any;
  actualPrice: any;
  MAX_COUNT: number = 10;
  count: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.actualPrice = this.calculateActualPrice(
      this.details.price,
      this.details.discount
    );
  }

  calculateActualPrice(price: number, discount: number) {
    return (price * (discount / 100)).toFixed(2);
  }

  updateCount(val: number) {
    switch (val) {
      case -1:
        if (this.count > 0) this.count--;

        break;
      case 1:
        if (this.count < this.MAX_COUNT) this.count++;

        break;
      case 0:
        this.count = 0;
    }
  }
}
