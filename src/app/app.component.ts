import {Component, ElementRef, OnInit} from '@angular/core';
import {CARDTEAM, RACEDATE,} from './text-welcome';
import {ViewChild} from '@angular/core/src/metadata/di';
import {DeviceDetectorService} from 'ngx-device-detector';
import {IdScrollService} from "./custom-components/id-scroll.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {WindowsSizeService} from "./services/windows-size-service/windows-size.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isMobile: boolean;

  // home = '/home';

  // scrollService: IdScrollService;

  constructor(public breakpointObserver: BreakpointObserver, private windowsSizeService: WindowsSizeService,
              private deviceService: DeviceDetectorService, private router: Router, private route: ActivatedRoute) {
    const browser = this.deviceService.getDeviceInfo().browser;
    console.log('You are using ' + browser);
    // if (browser === 'IE' || browser === 'MS-Edge') {
    //   this.router.navigate([`../deprecated`], { relativeTo: this.route });
    // }
  }

  // constructor(location: Location, router: Router, scrollService: IdScrollService) {
  //   this.scrollService = scrollService;
  //   router.events.subscribe((val) => {
  //     this.home = location.path();
  //   });
  // }

  // scrollTo(el) {
  //   this.scrollService.scrollTo(el);
  // }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 700px or over!');
        } else {
          console.log('Viewport is getting smaller!');
        }
        this.windowsSizeService.windowsSizeChanged(!state.matches);
      });
  }
}

