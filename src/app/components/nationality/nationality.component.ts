import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service'

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }
  
  selected(nationality){
    this.musicService.nationalityClick(nationality);
  }
}
