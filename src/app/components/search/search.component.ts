import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;  
  searchResult;

  constructor(private spotifyService: SpotifyService) { }

  searchMusic(){
       
    this.spotifyService.getSearch(this.searchStr)
      .subscribe(res => {
      })

     }
  
  ngOnInit() {
  }
}

