import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CARDTEAM, TEXTWELCOME} from "../text-welcome";
import {ReloadHomeService} from "./services/reload-home.service";
import {IdScrollService} from "../custom-components/id-scroll.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "./services/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  pic1 = './assets/DSC08248.jpg';
  pic2 = './assets/IMG2237.jpg';
  pic3 = './assets/finish.jpg';
  //textWelcome = TEXTWELCOME;
  textWelcome;
  informationTeam = CARDTEAM;

  reloadService: ReloadHomeService;

  scrollService: IdScrollService;

  partParam: string;

  constructor(reload: ReloadHomeService, scrollService: IdScrollService, private activatedRoute: ActivatedRoute, private newsService: NewsService) {
    this.reloadService = reload;
    this.activatedRoute.queryParams.subscribe(params => {
      this.partParam = params['part'];
    });
    this.scrollService = scrollService;
  }

  scrollTo(el: Element) {
    //el.scrollIntoView({block: 'start', behavior: 'smooth'});
    this.scrollService.scrollTo(el);
  }

  ngOnInit(): void {
    if(this.reloadService.getIfMustReload()){
      window.location.reload();
    }
    this.newsService.getNews().subscribe(result => {
      this.textWelcome = result;
      //console.log(result);
    })
  }

  ngAfterViewInit(): void {
    if(this.partParam){
      this.scrollService.scrollTo(this.partParam);
    }
  }
}
