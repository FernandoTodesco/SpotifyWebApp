import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavEventsService {

  private favoriteSource = new BehaviorSubject(false);
  favoriteEvent = this.favoriteSource.asObservable();

  constructor() { }

  handleFavorited(item){    
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    let favIndex = favorites.findIndex(x => x.id == item.id);
    favIndex >= 0 ? favorites.splice(favIndex, 1) : favorites.push(item);    
    localStorage.setItem('favorites', JSON.stringify(favorites));    
    this.favoriteSource.next(item.favorited);    
  }

}