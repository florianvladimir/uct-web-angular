import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponentsModule} from "../custom-components/custom-components.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ParallaxModule} from "ngx-parallax";
import {InformationPageComponent} from "./information-page/information-page.component";
import {MainPageComponent} from "./main-page.component";
import {MatButtonModule, MatCardModule, MatExpansionModule} from "@angular/material";
import {RaceDetailComponent} from './information-page/race-detail/race-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CustomComponentsModule,
    NgbModule,BrowserModule,
    FontAwesomeModule,
    ParallaxModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [MainPageComponent, InformationPageComponent, RaceDetailComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
