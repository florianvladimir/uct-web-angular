import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faImages} from '@fortawesome/free-regular-svg-icons';
import { faCode, faCopyright} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faImages = faImages;
  faCode = faCode;
  faCopyright = faCopyright

  constructor() { }

  ngOnInit() {
  }

}

