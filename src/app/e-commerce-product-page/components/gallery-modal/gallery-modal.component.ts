import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Images } from '../../interface/images';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
})
export class GalleryModalComponent implements OnInit {

  images: Images[] = [];
  currentIndex: number = 0;
  displayImage: string = '';

  constructor(
    public dialogRef: MatDialogRef<GalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.images = this.data.images;
    this.currentIndex = this.data.currentIndex;
    this.showImage(this.currentIndex);
  }

  updateIndex(val: number) {
    if (val == 1 && this.currentIndex != this.images.length - 1) {
      this.currentIndex += 1;
    } else if (val == -1 && this.currentIndex != 0) {
      this.currentIndex -= 1;
    }
    this.showImage(this.currentIndex);
  }

  updateThumbnail(index: number) {
    this.currentIndex = index;
    this.showImage(this.currentIndex);
  }

  showImage(index: number) {
    this.displayImage = this.images[index].imageUrl;
  }
}
