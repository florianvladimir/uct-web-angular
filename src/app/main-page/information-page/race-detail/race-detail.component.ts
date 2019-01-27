import {Component, Input, OnInit} from '@angular/core';
import {RaceDetail} from "../../models/race-detail.interface";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit {

  @Input()
  stageInfo: RaceDetail;

  panelOpenState = false;

  expanded = false;

  public trustedMap: SafeUrl;

  constructor(private sanatizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.stageInfo.stage === 'Etappe 1') {
      this.expanded = true;
    }
    if(this.stageInfo.map!==''){
      this.trustedMap = this.sanatizer.bypassSecurityTrustResourceUrl(this.stageInfo.map);
    }
  }

}
