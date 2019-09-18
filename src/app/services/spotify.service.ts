import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = null;
  searchEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  //Authorization
  auth() {
    this.token = localStorage.getItem('auth');
    const urlBase = 'https://accounts.spotify.com/authorize';
    const clientId = 'e90df8285741458190413e878f1eaa7f';
    const scopes = encodeURIComponent('user-read-private user-read-email');
    const redirectUri = encodeURIComponent('http://localhost:4200/home');
    const url = `${urlBase}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`;    
    if (!this.token) {
      window.location.href = url;
    }
  }

  refreshToken(){    
    const clientId = 'e90df8285741458190413e878f1eaa7f';
    const clientSecret = 'ddc7fdd78df04e5bad8c3af86339bbc6';
    const url = `https://bootcamp-angular.herokuapp.com/spotify/${clientId}/${clientSecret}`;
    this.http.get(url).subscribe((data: any) => 
    localStorage.setItem('auth', data.access_token)) 
  } 

  getUrl(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    this.token = localStorage.getItem('auth');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });    
    return this.http.get(url, { headers })    //does not exchange accessToken, wrong Authorization?
  }  

  //Searches
  getSearch(str: string){  
     return this.getUrl(`search?q=${str}*&type=artist,album,track&offset=0&limit=5`)
     .pipe(
      map( (data) => {
        this.searchEvent.next(this.formatSearchResults(data))        
      })
     )}

  getArtistAlbums(id: string ){
    return this.getUrl(`artists/${id}/albums?market=US`).pipe(
      map(this.formatTypeResults));
  }

  getAlbumTracks(id: string ){
    return this.getUrl(`albums/${id}/tracks`).pipe(
      map(this.formatTypeResults));
  }

  getNewReleases(){
    return this.getUrl('browse/new-releases').pipe(
      map((data: any ) => data.albums.items)            
    );
  }   

  //Tools
  formatSearchResults(data) {
    let arrayToReturn:Array<any> = [];
    
    let res = Object.keys(data).map(function (value) {
      return data[value].items;    
    })

    for (let i in res) {
      for (let j = 0; j < res[i].length; j++) {
        arrayToReturn.push(res[i][j]);  
      }}

    return arrayToReturn;
  }

  formatTypeResults(data) {
    let arrayToReturn:Array<any> = [];

    let res = Object.keys(data).map(function (value) {
      return data.items;
    })

    for (let i in res) {
      for (let j = 0; j < res[i].length; j++) {
        arrayToReturn.push(res[i][j]);
      }}

    return arrayToReturn;
  }
}
