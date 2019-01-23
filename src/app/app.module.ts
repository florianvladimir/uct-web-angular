import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import localeDECH from '@angular/common/locales/de-CH';
import {registerLocaleData} from '@angular/common';
import {MainPageModule} from "./main-page/main-page.module";
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatButtonModule} from "@angular/material";
import {ReloadHomeService} from "./main-page/services/reload-home.service";

registerLocaleData(localeDECH);




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    MainPageModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }, ReloadHomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
