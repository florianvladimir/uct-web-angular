import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {element} from 'protractor';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor(private sanitization: DomSanitizer) { }

  @Input()
  private photo: string;
  bla;

  ngOnInit() {
    this.bla = this.sanitization.bypassSecurityTrustStyle(`url(${this.photo})`);
  }

}
