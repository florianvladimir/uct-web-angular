import { Component, OnInit } from '@angular/core';
import {RACEDATE} from '../text-welcome';

@Component({
  selector: 'information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {

  informationDate = RACEDATE;

  constructor() { }

  ngOnInit() {
  }

}
