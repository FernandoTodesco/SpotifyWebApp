import { Component, OnInit, } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private searchResult: any[] = [];

  constructor(
    private spotify: SpotifyService,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.spotify.searchEvent.subscribe((data) => {
      this.searchResult = data;
      if (data !== null && data !== []) {
        localStorage.setItem('currentSearch', JSON.stringify(this.searchResult));
      }

    });

    this.searchService.currentEvent.subscribe(event => this.searchResult = event);
    this.searchResult = JSON.parse(localStorage.getItem('currentSearch'));
  }
}
