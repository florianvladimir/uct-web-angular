import {Component, OnInit} from '@angular/core';
import {INFOCUP, STAGES} from '../../text-welcome';
import {RaceDetail} from "../models/race-detail.interface";

@Component({
  selector: 'information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent {


  info = INFOCUP;

  temp = STAGES;

  constructor() {
  }

}
