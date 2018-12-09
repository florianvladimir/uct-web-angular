import {Component, ElementRef} from '@angular/core';
import {CARDTEAM, RACEDATE, TEXTWELCOME} from './text-welcome';
import {ViewChild} from '@angular/core/src/metadata/di';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pic1 = './assets/DSC08248.jpg';
  pic2 = './assets/IMG2237.jpg';
  pic3 = './assets/finish.jpg';
  textWelcome = TEXTWELCOME;
  informationTeam = CARDTEAM;

  scrollTo(el: Element) {
    el.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

}

