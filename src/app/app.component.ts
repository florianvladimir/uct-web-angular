import { Component } from '@angular/core';
import {CARDTEAM, RACEDATE, TEXTWELCOME} from './text-welcome';


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
}
