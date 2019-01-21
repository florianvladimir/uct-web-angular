import {Component, Input, OnInit} from '@angular/core';
import {DateCardInformation} from './model/date-card-information.interface';

@Component({
  selector: 'date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.scss']
})
export class DateCardComponent implements OnInit {

  constructor() { }

  @Input()
  cardInformation: DateCardInformation;

  ngOnInit() {
  }

}
