import {Component, Input, OnInit} from '@angular/core';
import {RaceDetail} from "../../models/race-detail.interface";

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

  constructor() {
  }

  ngOnInit() {
    if (this.stageInfo.stage === 'Etappe 1') {
      this.expanded = true;
    }
  }

}
