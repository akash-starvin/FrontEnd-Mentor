import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Input() data: any;
  @Output() selectedTag = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  addTagToList(tag: string){
    this.selectedTag.emit(tag);
  }
}
