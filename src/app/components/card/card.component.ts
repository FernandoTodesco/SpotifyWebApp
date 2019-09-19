import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() arrayToRead: any[]; 
  @Output() clearSearchEvent = new EventEmitter<string>();

  constructor() { }  

  ngOnChanges() {
 
  }

  clearSearch() {
    this.clearSearchEvent.emit();
  }


}
