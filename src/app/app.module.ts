import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { RadioService } from '../app/services/radio.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudioComponent } from './components/studio/studio.component';
import { RequestComponent } from './components/request/request.component';
import { AlbumComponent } from './components/album/album.component';
import { NewsComponent } from './components/news/news.component';
import { ChatComponent } from './components/chat/chat.component';
import { VisitorComponent } from './components/visitor/visitor.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SongComponent } from './components/song/song.component';
import { AccountComponent } from './components/account/account.component';
import { MusicComponent } from './components/music/music.component';
import { NewsCrudComponent } from './components/news/news.crud/news.crud.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NationalityComponent } from './components/nationality/nationality.component';
import { GenreComponent } from './components/genre/genre.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudioComponent,
    RequestComponent,
    AlbumComponent,
    NewsComponent,
    ChatComponent,
    VisitorComponent,
    PlaylistComponent,
    SongComponent,
    AccountComponent,
    MusicComponent,
    NewsCrudComponent,
    ArtistComponent,
    NationalityComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [RadioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
