import {Component} from '@angular/core';
import {IdScrollService} from '../../../services/id-scroll-service/id-scroll.service';
import {WindowsSizeService} from '../../../services/windows-size-service/windows-size.service';
import {NAV_BAR_ITEMS} from "../../../../assets/constants";
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(idScrollService: IdScrollService, public windowsSizeService: WindowsSizeService) {
    this.idScrollService = idScrollService;
  }

  public navBarItems: NavBarItem[] = NAV_BAR_ITEMS;

  public idScrollService: IdScrollService;

  faBars = faBars;



  scrollTo(el: string) {
    this.idScrollService.scrollTo(el, ['smooth']);
  }

}

export interface NavBarItem {
  name: string;
  link: string;
  parameter: string;
}
