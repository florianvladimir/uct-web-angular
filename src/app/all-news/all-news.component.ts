import { Component, OnInit } from '@angular/core';
import {NewsService} from "../main-page/services/news.service";

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  public textWelcome;

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(result => {
      this.textWelcome = result;
      console.log(result);
    })
  }

}
