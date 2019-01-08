import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomComponentsModule} from './custom-components/custom-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import localeDECH from '@angular/common/locales/de-CH';
import {registerLocaleData} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ParallaxModule} from 'ngx-parallax';
import {MainPageModule} from "./main-page/main-page.module";
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeDECH);




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    MainPageModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
