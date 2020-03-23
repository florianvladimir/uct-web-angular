import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponentsModule} from "../custom-components/custom-components.module";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {InformationPageComponent} from "./information-page/information-page.component";
import {MainPageComponent} from "./main-page.component";
import {MatButtonModule, MatCardModule, MatExpansionModule, MatDialogModule, MatSlideToggle, MatSlideToggleModule} from "@angular/material";
import {RaceDetailComponent} from './information-page/race-detail/race-detail.component';
import {NewsService} from "./services/news.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {MatRadioModule} from "@angular/material/radio";
import { CompetitionRulesComponent, CompetitionRulesDialog } from '../competition-rules/competition-rules.component';
import { MyMapComponent } from '../custom-components/my-map/my-map.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomComponentsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatRadioModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [NewsService],
  declarations: [MainPageComponent,
    InformationPageComponent,
    RaceDetailComponent,
    CompetitionRulesDialog,
    CompetitionRulesComponent],
  entryComponents: [CompetitionRulesComponent, CompetitionRulesDialog],
  exports: [MainPageComponent]
})
export class MainPageModule { }
