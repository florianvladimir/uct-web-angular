import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {element} from 'protractor';
import {ContactCardInformation} from './model/contact-card-text.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  constructor() { }

  @Input()
  public cardInformation: ContactCardInformation;


}
