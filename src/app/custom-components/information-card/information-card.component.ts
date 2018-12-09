import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataInformationCard, TextInformationCard} from './model/data-information-card.interface';
import {e} from '@angular/core/src/render3';

@Component({
  selector: 'information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent {

  @Input()
  public information: DataInformationCard;

  @Input()
  public btn1: Element;

  @Input()
  public btn2: Element;


  @Output()
  scroll = new EventEmitter<Element>();

  constructor() { }

  scrollTo(link) {
    if (link === 'btn1') {
      this.scroll.emit(this.btn1);
    } else if (link === 'btn2') {
      this.scroll.emit(this.btn2);
    }

  }

}
