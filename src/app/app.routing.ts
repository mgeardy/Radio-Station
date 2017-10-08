import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudioComponent } from './components/studio/studio.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { RequestComponent } from './components/request/request.component';
import { MusicComponent } from './components/music/music.component';
import { NationalityComponent } from './components/nationality/nationality.component';
import { GenreComponent } from './components/genre/genre.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NewsComponent } from './components/news/news.component';
import { ChatComponent } from './components/chat/chat.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { SongComponent } from './components/song/song.component';
import { AccountComponent } from './components/account/account.component';


const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'studio', component: StudioComponent, children: [
        { path: '', redirectTo: 'playlist', pathMatch: 'full' },
        { path: 'playlist', component: PlaylistComponent },
        { path: 'request', component: RequestComponent },
        { path: 'visitor', component: VisitorComponent }
    ] },
    { path: 'music', component: MusicComponent, children: [
        {path: '', redirectTo: 'artist', pathMatch: 'full' },
        {path: 'nationality', component: NationalityComponent },
        {path: 'genre', component: GenreComponent },
        {path: 'artist', component: ArtistComponent },
        {path: 'album', component: AlbumComponent },
        {path: 'song', component: SongComponent }
    ] },
    { path: 'news', component: NewsComponent },
    { path: 'account', component: AccountComponent },
    { path: '**', component: HomeComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule{}
