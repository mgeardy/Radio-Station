import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service'

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }
  
  selected(genre){
    this.musicService.genreClick(genre);
  }
}
