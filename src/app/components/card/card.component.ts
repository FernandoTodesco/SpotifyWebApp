import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() arrayToRead: any[]; 

  constructor() { }  

  ngOnChanges() {
 
  }

}
