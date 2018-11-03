import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {element} from 'protractor';
import {ContactCardInformation} from './model/contact-card-text.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor(private sanitization: DomSanitizer) { }

  @Input()
  public cardInformation: ContactCardInformation;
  photoPath;

  ngOnInit() {
    this.photoPath = this.sanitization.bypassSecurityTrustStyle(`url(${this.cardInformation.photoPath})`);
  }

}
