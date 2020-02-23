import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponentsModule} from "../custom-components/custom-components.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {InformationPageComponent} from "./information-page/information-page.component";
import {MainPageComponent} from "./main-page.component";
import {MatButtonModule, MatCardModule, MatExpansionModule} from "@angular/material";
import {RaceDetailComponent} from './information-page/race-detail/race-detail.component';
import {NewsService} from "./services/news.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  imports: [
    CommonModule,
    CustomComponentsModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatRadioModule
  ],
  providers: [NewsService],
  declarations: [MainPageComponent, InformationPageComponent, RaceDetailComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
