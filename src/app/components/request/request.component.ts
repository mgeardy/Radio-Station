import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [RequestService]
})
export class RequestComponent implements OnInit {

  requests = [];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requests = this.requestService.getRequests();
  }
}
