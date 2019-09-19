import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FavEventsService } from 'src/app/services/fav-events.service';

@Component({
  selector: 'app-favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent implements OnInit {
  private favorited: boolean = false;

  @Input() item;
  @Output() favoriteEvent = new EventEmitter<Object>();

  constructor(private favoriteService: FavEventsService) { }

  ngOnInit() {
    this.favorited = this.item.favorited;
  }

  toggeFavorite() {
    this.favorited = !this.favorited;

    this.favoriteEvent.emit(this.item);
    this.favoriteService.updateFavorite(this.favorited);
  }
}