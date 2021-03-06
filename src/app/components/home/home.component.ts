import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { FavEventsService } from './../../services/fav-events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  accessToken: boolean;
  favs: any[] = [];

  constructor(
    private router: Router,
    private spotify: SpotifyService,
    private favoriteService: FavEventsService
    ) { }

  ngOnInit() {
    this.login();
    this.loadFavorites();
    this.loadNewReleases();
  }

  loadFavorites() {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', '[]');
    }
    this.favoriteService.favoriteEvent.subscribe(() => {
      this.favs = JSON.parse(localStorage.getItem('favorites'));
      this.loadNewReleases();
      }
    );
  }

  loadNewReleases() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
    });
  }

  login() {
    const currentUrl = this.router.url.split('access_token=')[1];
    const token: string = currentUrl ? currentUrl.split('&')[0] : null;
    if (token) {
      if (!this.accessToken) {
        localStorage.setItem('auth', token);
        this.accessToken = false;
      }
      setInterval(() => {
      this.spotify.refreshToken();
      }, (5 * 60 * 1000));
      this.accessToken = true;
    } else {
      this.spotify.auth();
    }
  }
}
