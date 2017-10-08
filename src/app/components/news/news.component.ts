import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses = [];

  constructor() { }

  ngOnInit() {
    this.newses = [
      {
        title: 'Guy Kawasaki: Top 10 things you should know before entering business',
        image: 'https://i.ytimg.com/vi/pAqkO5DZ5yE/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCyG71o5C9X2NIUYQ762mqnyELD4g'
      },
      {
        title: 'Guy Kawasaki - The Art of The Start',
        image: 'https://i.ytimg.com/vi/7mEQ0ono8mg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDf-z42kPzMQPDHD_e6Y0pxvphTKQ'
      },
      {
        title: 'React license drama - Talking Open Source Licenses - Fun',
        image: 'https://i.ytimg.com/vi/hnHsZQ1JDII/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCOhYy5fayKIE40n7U6McJWBIRMPQ'
      },
      {
        title: 'Production Progressive Web Apps With JavaScript',
        image: 'https://i.ytimg.com/vi/aCMbSyngXB4/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCsZJcqZvED17QvigCHwDgCuXXwsw'
      },
      {
        title: 'Development with Electron: Episode 8 - Electron Reload',
        image: 'https://i.ytimg.com/vi/8tirF8_BdqY/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAnEBYJxLAwXhIaaD5dDbqus28ECA'
      }
      ,{
        title: 'Guy Kawasaki\'s Top 10 Rules For Success (@GuyKawasaki)',
        image: 'https://i.ytimg.com/vi/nYv4W2IUNs0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBnkBYGWqC_5_yYwN3EC3n0-6Qm1w'
      },
      {
        title: 'Coding Challenge #56: Attraction and Repulsion Forces',
        image: 'https://i.ytimg.com/vi/OAcXnzRNiCY/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAmJTy-4R2MeQK8b04hpZjDqUGN2w'
      },
      {
        title: 'Coding Challenge #57: Mapping Earthquake Data',
        image: ''
      },
      {
        title: 'Angular 4 Tutorial - GPS Activity Mapping App',
        image: 'https://i.ytimg.com/vi/EHdSb279Lzg/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLB7j6acps5NX1gkxXASoc1sYJV3WQ'
      }
    ]
  }

}
