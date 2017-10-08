import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RadioService {
    radioUrl = '';
    currentsong = '';
    
    constructor(private http: Http){}
    
    radioConnect = () => {
        this.http.get('https://api.ipify.org/?format=json').subscribe(res => {
            var ip = res.json().ip;
            this.radioUrl = `http://${ip}:8000/geardyfm`;
            //this.http.get(`http://${ip}:8000/currentsong?sid=1`).map(res => res.json()).subscribe(res => {
            //  this.currentsong = res.json();
            //});
        });
    }

    radioToggle(){
        if(this.radioUrl != null && this.radioUrl != ''){
            this.radioUrl = null;
        }else{
            this.radioConnect();
        }
    }
}