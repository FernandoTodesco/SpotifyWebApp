import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumId: string;
  tracks: [] = [];
  time: string;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
    ) {
      this.albumId = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit() {
    this.spotifyService.getAlbumTracks(this.albumId).subscribe((data: any) => {
      this.tracks = data;
    });

  }

  getTime(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds: any = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

}
