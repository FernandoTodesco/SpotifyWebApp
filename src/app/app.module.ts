import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CardComponent } from './components/card/card.component';
import { AlbumComponent } from './components/album/album.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FavoriteStarComponent } from './components/favorite-star/favorite-star.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    ArtistComponent,
    CardComponent,
    AlbumComponent,
    SearchResultsComponent,
    FavoriteStarComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
