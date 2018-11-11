import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationCardComponent} from './information-card/information-card.component';
import {ContactCardComponent} from './contact-card/contact-card.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DateCardComponent } from './date-card/date-card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgbModule
  ],
  declarations: [InformationCardComponent, ContactCardComponent, DateCardComponent],
  exports: [InformationCardComponent, ContactCardComponent, DateCardComponent]
})
export class CustomComponentsModule { }
