import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomComponentsModule} from './custom-components/custom-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import localeDECH from '@angular/common/locales/de-CH';
import {registerLocaleData} from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InformationPageComponent } from './information-page/information-page.component';
import {ParallaxModule} from 'ngx-parallax';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    InformationPageComponent,
  ],
  imports: [
    CustomComponentsModule,
    NgbModule,
    BrowserModule,
    FontAwesomeModule,
    ParallaxModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
