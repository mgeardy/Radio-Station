import { Component, OnInit } from '@angular/core';
import { RadioService } from '../app/services/radio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private radioService: RadioService){
  }
  
  ngOnInit(){
    //this.radioService.radioConnect();
  }  
}
