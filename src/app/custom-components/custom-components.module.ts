import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationCardComponent} from './information-card/information-card.component';
import {ContactCardComponent} from './contact-card/contact-card.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatTooltipModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DateCardComponent } from './date-card/date-card.component';
import {FooterComponent} from './footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SmallInfoCardComponent } from './small-info-card/small-info-card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgbModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  declarations: [InformationCardComponent, ContactCardComponent, DateCardComponent, FooterComponent, SmallInfoCardComponent],
  exports: [InformationCardComponent, ContactCardComponent, DateCardComponent, FooterComponent, SmallInfoCardComponent]
})
export class CustomComponentsModule { }
