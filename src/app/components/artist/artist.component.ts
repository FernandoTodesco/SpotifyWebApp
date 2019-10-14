import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistId: string;
  albums: any[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
    ) {
      this.artistId = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit() {

    this.spotifyService.getArtistAlbums(this.artistId).subscribe((data: any) => {
      this.albums = data;
    });
}

}
