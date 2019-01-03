import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {DataInformationCard, TextInformationCard} from './model/data-information-card.interface';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        // transform: 'translateY(0) scale(1)'
        transform: 'scale(1.0)'
      })),
      state('hide',   style({
        opacity: 0,
        // transform: 'translateX(-100%) scale(0.8)'
        // transform: 'translateY(100%) scale(0.2)',
        transform: 'scale(0)'
      })),
      transition('show => hide', animate('1s ease-out')),
      transition('hide => show', animate('1s ease-in')),
    ])
  ]
})
export class InformationCardComponent implements OnInit{

  state= 'hide';

  @Input()
  public information: DataInformationCard;

  @Input()
  public btn1: Element;

  @Input()
  public btn2: Element;


  @Output()
  scroll = new EventEmitter<Element>();

  constructor(public element: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (componentPosition >= windowHeight - (windowHeight*0.1)) {
      this.state = 'hide';
    } else {
      this.state = 'show';
    }

  }

  scrollTo(link) {
    if (link === 'btn1') {
      this.scroll.emit(this.btn1);
    } else if (link === 'btn2') {
      this.scroll.emit(this.btn2);
    }

  }

}
