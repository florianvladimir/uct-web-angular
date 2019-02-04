import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  public url: string;

  public trustedMap: SafeUrl;

  constructor(private sanatizer: DomSanitizer) { }

  ngOnInit() {
    if(this.url!==''){
      return this.trustedMap = this.sanatizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }


}
