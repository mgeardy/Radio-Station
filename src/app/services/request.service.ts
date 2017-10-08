import {Injectable} from '@angular/core';

@Injectable()
export class RequestService{

  requests = [];

  getRequests() {
    this.requests = [
        {
          title: "All I Ask",
          artist: "Adelle",
          album: "Adele's Album",
          username: "CuteKitty"
        },
        {
          title: "Livin On A Prayer",
          artist: "Bon Jovi",
          album: "Slippery When Wet",
          username: "GothamBadBoy"
        },
        {
          title: "Heaven",
          artist: "Bryan Adams",
          album: "Ride..Ride..",
          username: "EvanAlfaro"
        },
      ]
    return this.requests;
  }
}