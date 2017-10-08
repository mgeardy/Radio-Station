import { Component, OnInit } from '@angular/core';
import { ArtistComponent } from '../artist/artist.component';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [MusicService]
})
export class MusicComponent implements OnInit {

  selectedNationality;
  selectedGenre;
  selectedArtist;
  selectedAlbum;
  currentNav = 'song';
  
  constructor( private musicService: MusicService ) {
    this.musicService.nationalityClickSource.asObservable().subscribe(nationality => { this.selectedNationality = nationality; this.unsetAlbum(); this.currentNav = 'genre'; } );
    this.musicService.genreClickSource.asObservable().subscribe(genre => { this.selectedGenre = genre; this.unsetAlbum(); this.currentNav = 'artist'; } );
    this.musicService.artistClickSource.asObservable().subscribe(artist => { this.selectedArtist = artist; this.unsetAlbum(); this.currentNav = 'album'; } );
    this.musicService.albumClickSource.asObservable().subscribe( album => { this.selectedAlbum = album; this.currentNav = 'song'; } );
   }

  ngOnInit() {
  }
  
  stopPropagation(event){
    event.stopPropagation();
  }

  unsetNationality(){
    this.selectedNationality = null;
    this.musicService.selectedNationality = null;
  }

  unsetGenre(){
    this.selectedGenre = null;
    this.musicService.selectedGenre = null;
  }

  unsetArtist(){
    this.selectedArtist = null;
    this.musicService.selectedArtist = null;
  }
  unsetAlbum(){
    this.selectedAlbum = null;
    this.musicService.selectedAlbum = null;
  }

  setCurrentNav(navName){
    this.currentNav = navName;
  }

  isCurrentNav(navName){
    let classess = {
      color: navName == this.currentNav ? '#337ab7' : '#808080', 
      fontWeight: navName == this.currentNav ? 'bold' : 'normal'
    };
    return classess;
  }
}
