import {Component, OnInit} from '@angular/core';
import {ReloadHomeService} from "../main-page/services/reload-home.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(reloadService: ReloadHomeService) {
    reloadService.shouldReload();
  }

  ngOnInit() {

  }

}
