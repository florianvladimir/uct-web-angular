import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {DataInformationCard, InputButtonInfo, TextInformationCard} from './model/data-information-card.interface';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IdScrollService} from "../../services/id-scroll-service/id-scroll.service";

@Component({
  selector: 'information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //       // transform: 'translateY(0) scale(1)'
  //       transform: 'scale(1.0)'
  //     })),
  //     state('hide',   style({
  //       opacity: 0,
  //       // transform: 'translateX(-100%) scale(0.8)'
  //       // transform: 'translateY(100%) scale(0.2)',
  //       transform: 'scale(0)'
  //     })),
  //     transition('show => hide', animate('1s ease-out')),
  //     transition('hide => show', animate('1s ease-in')),
  //   ])
  // ]
})
export class InformationCardComponent implements OnInit{

  // state= 'hide';

  @Input()
  public information: DataInformationCard;

  @Input()
  public btn1: Element;

  @Input()
  public btn2: Element;

  @Input()
  public heightFitParent: false;

  @Input()
  public titleWithBorder: false;

  // @Output()
  // scroll = new EventEmitter<Element>();

  constructor(public element: ElementRef, public idScrollService: IdScrollService) { }

  ngOnInit(): void {
  }

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.element.nativeElement.getBoundingClientRect().top;
  //   const windowHeight = window.innerHeight;
  //
  //   if (componentPosition >= windowHeight - (windowHeight*0.1)) {
  //     this.state = 'hide';
  //   } else {
  //     this.state = 'show';
  //   }
  //
  // }



  scrollTo(btn: InputButtonInfo) {
    if(btn.param){
      this.idScrollService.scrollTo(btn.param.value, 'smooth');
    }
  }

}
