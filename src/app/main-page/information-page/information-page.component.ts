import {Component, OnInit} from '@angular/core';
import {INFOCUP} from '../../text-welcome';
import {RaceDetail} from "../models/race-detail.interface";

@Component({
  selector: 'information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {


  info = INFOCUP;

  temp: RaceDetail[] = [
    {
      stage: 'Etappe 1',
      stageName: 'Rabeflue',
      distance: 2.7,
      altitude: 280
    },
    {
      stage: 'Etappe 2',
      stageName: 'Haltenegg',
      distance: 4,
      altitude: 480
    },
    {
      stage: 'Etappe 3',
      stageName: 'Vesuv',
      distance: 5.1,
      altitude: 560
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
