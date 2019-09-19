import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent implements OnInit {
  private favorited: boolean = false;

  @Input() item;
  @Output() favoriteEvent = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
    this.favorited = this.item.favorited;
  }

  toggeFavorite() {
    this.favorited = !this.favorited;

    this.favoriteEvent.emit(this.item);
  }
}
