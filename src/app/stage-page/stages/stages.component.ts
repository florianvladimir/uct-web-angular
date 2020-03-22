import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IdScrollService} from "../../custom-components/id-scroll.service";

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements AfterViewInit{

  info = null;


  raceParam: string;
  scrollService: IdScrollService;

  constructor(private activatedRoute: ActivatedRoute, scrollService: IdScrollService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.raceParam = params['race'];
    });
    this.scrollService = scrollService;
  }

  ngAfterViewInit(): void {
    if(this.raceParam){
      this.scrollService.scrollTo(this.raceParam);
    }
  }




}
