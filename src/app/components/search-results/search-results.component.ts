import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {
  private searchResult: any[] = [];

  constructor(
    private spotify: SpotifyService
    ) { }

  ngOnInit() {
    this.spotify.searchEvent.subscribe((data) => {
      this.searchResult = data;
      if (data) {
        localStorage.setItem('currentSearch', JSON.stringify(this.searchResult));
      }

    });
    this.searchResult = JSON.parse(localStorage.getItem('currentSearch'));
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  clearSearch($event) {
    this.searchResult = undefined
  }
}
