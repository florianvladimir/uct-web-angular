import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationCardComponent} from './information-card/information-card.component';
import {ContactCardComponent} from './contact-card/contact-card.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatTooltipModule} from '@angular/material';
import { DateCardComponent } from './date-card/date-card.component';
import {FooterComponent} from './footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SmallInfoCardComponent } from './small-info-card/small-info-card.component';
import { MapComponent } from './map/map.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent} from "./navigation/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {IdScrollService} from "../services/id-scroll-service/id-scroll.service";
import {WindowsSizeService} from "../services/windows-size-service/windows-size.service";
import { MyMapComponent } from './my-map/my-map.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTooltipModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  declarations: [InformationCardComponent, ContactCardComponent, DateCardComponent, FooterComponent, SmallInfoCardComponent, MapComponent, HeaderComponent, MyMapComponent],
  exports: [InformationCardComponent, ContactCardComponent, DateCardComponent, FooterComponent, SmallInfoCardComponent, MapComponent, HeaderComponent, MyMapComponent],
  providers: [IdScrollService, WindowsSizeService]
})
export class CustomComponentsModule { }
