import {Component, ElementRef} from '@angular/core';
import {CARDTEAM, RACEDATE, TEXTWELCOME} from './text-welcome';
import {ViewChild} from '@angular/core/src/metadata/di';
import {IdScrollService} from "./custom-components/id-scroll.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  home = '/home';

  scrollService: IdScrollService;

  constructor(location: Location, router: Router, scrollService: IdScrollService) {
    this.scrollService = scrollService;
    router.events.subscribe((val) => {
      this.home = location.path();
    });
  }

  scrollTo(el) {
    this.scrollService.scrollTo(el);
  }

}

