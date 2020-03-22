import { AfterViewInit, Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ABOUT_US, CARDTEAM, MORE_NEWS } from "../text-welcome";
import { ReloadHomeService } from "./services/reload-home.service";
import { IdScrollService } from "../custom-components/id-scroll.service";
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from "@angular/router";
import { NewsService } from "./services/news.service";
import { WindowsSizeService } from "../services/windows-size-service/windows-size.service";
import { DataInformationCard } from "../custom-components/information-card/model/data-information-card.interface";
import { CompetitionRulesComponent, CompetitionRulesDialog } from '../competition-rules/competition-rules.component';
import { InformationCardComponent } from '../custom-components/information-card/information-card.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  textWelcome;
  informationTeam = CARDTEAM;
  moreNews = MORE_NEWS;
  public aboutUs = ABOUT_US;

  scrollService: IdScrollService;

  partParam: string;

  showCompetitionRules: string;

  isMobile: boolean;

  constructor(reload: ReloadHomeService,
    scrollService: IdScrollService,
    public activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    public dialog: MatDialog,
    public windowsSizeService: WindowsSizeService) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.partParam = params['page'];
      this.showCompetitionRules = params['showCopmetitionRules']
    });
    this.scrollService = scrollService;
  }


  ngOnInit(): void {
    this.newsService.getNews().subscribe(result => {
      this.textWelcome = result;
    });

    this.isMobile = this.windowsSizeService.isMobile;
  }

  ngAfterViewInit(): void {
    if (this.partParam) {
      this.scrollService.scrollTo(this.partParam);
    }

    if (this.showCompetitionRules) {
      const dialogRef = this.dialog.open(CompetitionRulesDialog);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
