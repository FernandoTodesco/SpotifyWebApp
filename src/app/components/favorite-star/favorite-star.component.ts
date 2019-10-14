import { Component, OnInit, Input } from '@angular/core';
import { FavEventsService } from 'src/app/services/fav-events.service';

@Component({
  selector: 'app-favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent implements OnInit {

  private favorited: boolean;
  @Input() item;

  constructor(private favoriteService: FavEventsService) { }

  ngOnInit() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const favIndex = favorites.findIndex(x => x.id === this.item.id);
    favIndex >= 0 ? this.favorited = true : this.favorited = false;
  }

  toggleFavorite(item) {
    this.favoriteService.handleFavorited(item);
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const favIndex = favorites.findIndex(x => x.id === item.id);
    favIndex >= 0 ? this.favorited = true : this.favorited = false;
  }
}
