import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service'

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {

  constructor(private musicService: MusicService) { }

}
