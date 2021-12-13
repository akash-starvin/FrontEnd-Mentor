import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
import { FetchJsonService } from '../../service/fetch-json.service';

@Component({
  selector: 'product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss'],
})
export class ProductHomeComponent implements OnInit {
  MOCK_DATA_URL: string =
    '../../../../assets/e-commerce-product-page/mock-data/product-data.json';

  responseJson: Product | undefined;

  constructor(private fetchJsonService: FetchJsonService) {}

  ngOnInit(): void {
    this.getMockData();
  }

  getMockData() {
    this.fetchJsonService.fetchJson(this.MOCK_DATA_URL).subscribe((result) => {
      this.responseJson = result;
    });
  }
}
