import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  constructor(private musicService: MusicService) { }
  
  selected(album){
    this.musicService.albumClick(album);
  }
}
