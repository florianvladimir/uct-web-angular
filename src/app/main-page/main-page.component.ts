import { Component, OnInit } from '@angular/core';
import {CARDTEAM, TEXTWELCOME} from "../text-welcome";
import {Router} from "@angular/router";
import {ReloadHomeService} from "./reload-home.service";

@Component({
  selector: 'app-home',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  pic1 = './assets/DSC08248.jpg';
  pic2 = './assets/IMG2237.jpg';
  pic3 = './assets/finish.jpg';
  textWelcome = TEXTWELCOME;
  informationTeam = CARDTEAM;

  reloadService: ReloadHomeService;

  constructor(reload: ReloadHomeService) {
    this.reloadService = reload;
  }

  scrollTo(el: Element) {
    el.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  ngOnInit(): void {
    if(this.reloadService.getIfMustReload()){
      window.location.reload();
    }
  }
}
