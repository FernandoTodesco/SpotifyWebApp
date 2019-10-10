import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchEventSource = new BehaviorSubject(null);
  currentEvent = this.searchEventSource.asObservable();  

  constructor() { }

  clearEvent(event$){
    this.searchEventSource.next(event$)
  }
}