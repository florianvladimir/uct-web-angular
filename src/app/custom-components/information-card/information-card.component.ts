import {Component, Input, OnInit} from '@angular/core';
import {DataInformationCard, TextInformationCard} from './model/data-information-card.interface';

@Component({
  selector: 'information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent implements OnInit {

  @Input()
  public information: DataInformationCard;

  constructor() { }

  ngOnInit() {
  }

}
