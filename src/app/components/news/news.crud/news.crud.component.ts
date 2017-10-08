import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscrud',
  templateUrl: './news.crud.component.html',
  styleUrls: ['./news.crud.component.css']
})
export class NewsCrudComponent implements OnInit {
  
  news_title = "Do You Want To Know How It Goes?";
  news_source = "detik.finance";
  news_short = "some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here some text here ";
  news_url = "https://www.google.co.id/search?q=lorem&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjrq5nm69fWAhUMjZQKHSfoCzAQ_AUICigB&biw=1366&bih=635";
  news_img = "https://www.popwebdesign.net/popart_blog/wp-content/uploads/2016/05/lorem-ipsum-filler-text.jpg";

  constructor() { }

  ngOnInit() {
  }

}
