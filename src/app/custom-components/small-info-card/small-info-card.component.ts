import { Component, OnInit } from '@angular/core';
import { faCalendar, faMapMarkerAlt, faTrophy, faMountain, faClock, faRoute } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'small-info-card',
  templateUrl: './small-info-card.component.html',
  styleUrls: ['./small-info-card.component.scss']
})
export class SmallInfoCardComponent {

  faCalendar = faCalendar;
  faLocation = faMapMarkerAlt;
  faTrophy = faTrophy;
  faMountain = faMountain;
  faClock = faClock;
  faRoute = faRoute;

  constructor() { }

}
