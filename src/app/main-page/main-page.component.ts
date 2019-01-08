import { Component, OnInit } from '@angular/core';
import {CARDTEAM, TEXTWELCOME} from "../text-welcome";

@Component({
  selector: 'app-home',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  pic1 = './assets/DSC08248.jpg';
  pic2 = './assets/IMG2237.jpg';
  pic3 = './assets/finish.jpg';
  textWelcome = TEXTWELCOME;
  informationTeam = CARDTEAM;

  scrollTo(el: Element) {
    el.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
}
