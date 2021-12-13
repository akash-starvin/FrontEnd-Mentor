import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent implements OnInit {
  @Input() images: any;
  currentIndex: number = 0;
  displayImage: string = '';

  constructor() {}

  ngOnInit(): void {
    this.showImage(this.currentIndex);
  }

  updateMobileIndex(val: number) {
    if (val == 1 && this.currentIndex != this.images.length - 1) {
      this.currentIndex += 1;
    } else if (val == -1 && this.currentIndex != 0) {
      this.currentIndex -= 1;
    }
    this.showImage(this.currentIndex);
  }

  updateThumbnail(index: number){
    this.currentIndex = index;
    this.showImage(this.currentIndex);
  }

  showImage(index: number){
    this.displayImage = this.images[index].imageUrl;
  }
}
