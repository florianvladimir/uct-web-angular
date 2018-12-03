import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomComponentsModule} from './custom-components/custom-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import localeDECH from '@angular/common/locales/de-CH';
import {registerLocaleData} from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CustomComponentsModule,
    NgbModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
