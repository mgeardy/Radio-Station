import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [RequestService]
})
export class PlaylistComponent implements OnInit {
  requests = [];
  playlist = [];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requests = this.requestService.getRequests();
    this.playlist = [
      {
        title: "Your're All I Need",
        artist: 'White Lion',
        duration: '04:05'
      },
      {
        title: 'I Remember You',
        artist: 'Skid Row',
        duration: '03:25'
      },
      {
        title: 'Photographs',
        artist: 'Ed Sheeran',
        duration: '03:34'
      },
      {
        title: 'All I Ask',
        artist: 'Adele',
        duration: '03:15'
      },
      {
        title: 'Nothing Compares To You',
        artist: "Sinead O' Connor",
        duration: '03:31'
      },
      {
        title: "Your're All I Need",
        artist: 'White Lion',
        duration: '04:05'
      },
      {
        title: 'I Remember You',
        artist: 'Skid Row',
        duration: '03:25'
      },
      {
        title: 'Photographs',
        artist: 'Ed Sheeran',
        duration: '03:34'
      },
      {
        title: 'All I Ask',
        artist: 'Adele',
        duration: '03:15'
      },
      {
        title: 'Nothing Compares To You',
        artist: "Sinead O' Connor",
        duration: '03:31'
      },
      {
        title: "Your're All I Need",
        artist: 'White Lion',
        duration: '04:05'
      },
      {
        title: 'I Remember You',
        artist: 'Skid Row',
        duration: '03:25'
      },
      {
        title: 'Photographs',
        artist: 'Ed Sheeran',
        duration: '03:34'
      },
      {
        title: 'All I Ask',
        artist: 'Adele',
        duration: '03:15'
      },
      {
        title: 'Nothing Compares To You',
        artist: "Sinead O' Connor",
        duration: '03:31'
      },
      {
        title: "Your're All I Need",
        artist: 'White Lion',
        duration: '04:05'
      },
      {
        title: 'I Remember You',
        artist: 'Skid Row',
        duration: '03:25'
      },
      {
        title: 'Photographs',
        artist: 'Ed Sheeran',
        duration: '03:34'
      },
      {
        title: 'All I Ask',
        artist: 'Adele',
        duration: '03:15'
      },
      {
        title: 'Nothing Compares To You',
        artist: "Sinead O' Connor",
        duration: '03:31'
      }
    ]
  }

}
