import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ParallaxModule} from 'ngx-parallax';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {InformationCardComponent} from './custom-components/information-card/information-card.component';
import {CustomComponentsModule} from './custom-components/custom-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CustomComponentsModule,
    NgbModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
