import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() cardItem;

  constructor() { }

  ngOnInit() {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    let indexFound = this.find(favorites, this.cardItem.id);

    if (indexFound !== -1) {
      this.cardItem.favorited = true;
    }
  }

  handleFavorited($event) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    let indexFound = this.find(favorites, $event.id);

    if (indexFound !== -1) {
      favorites.splice(indexFound, 1);
    } else {
      favorites.push($event);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  find(array, id) {
    for(let i = 0; i < array.length; i++) {
      if (array[i]['id'] === id) {
        return i;
      }
    }

    return -1;
  }
}
