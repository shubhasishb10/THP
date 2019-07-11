import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-control-bar',
  templateUrl: './pagination-control-bar.component.html',
  styleUrls: ['./pagination-control-bar.component.css']
})
export class PaginationControlBarComponent implements OnInit {

  @Output() fetchType = new EventEmitter();
  @Input() isFirstPage: boolean;
  @Input() isLastPage: boolean;
  @Input() totalPage: number;
  @Input() currentPage: number;

  constructor() { }

  ngOnInit() {
  }

  firstButtonClick(){
    this.fetchType.emit(FetchType.FIRST);
  }
  lastButtonClick(){
    this.fetchType.emit(FetchType.LAST);
  }
  nextButtonClick(){
    this.fetchType.emit(FetchType.NEXT);
  }
  prevButtonClick(){
    this.fetchType.emit(FetchType.PREV);
  }
}

export enum FetchType {
  FIRST,
  LAST,
  NEXT,
  PREV
}
