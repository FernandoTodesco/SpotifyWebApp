import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavEventsService {

  private favoriteSource = new BehaviorSubject([]);
  favoriteEvent = this.favoriteSource.asObservable();

  constructor() { }

  updateFavorite(event){
    this.favoriteSource.next(event);
  }
}