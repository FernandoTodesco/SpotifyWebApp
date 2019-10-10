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
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    let favIndex = favorites.findIndex(x => x.id == this.item.id);
    favIndex >= 0 ? this.favorited = true : this.favorited = false;  
  }

  toggleFavorite(item) {
    this.favoriteService.handleFavorited(item);
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    let favIndex = favorites.findIndex(x => x.id == item.id);
    favIndex >= 0 ? this.favorited = true : this.favorited = false;
  }
}