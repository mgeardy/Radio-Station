import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicService } from '../../services/music.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  constructor( private musicService: MusicService ) { }

  ngOnInit() {
  }

  selected(artist){
    this.musicService.artistClick(artist);
  }
}
