import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import localeDECH from '@angular/common/locales/de-CH';
import {CommonModule, registerLocaleData} from '@angular/common';
import {MainPageModule} from "./main-page/main-page.module";
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {ReloadHomeService} from "./main-page/services/reload-home.service";
import {StagePageModule} from "./stage-page/stage-page.module";
import {IdScrollService} from "./custom-components/id-scroll.service";

registerLocaleData(localeDECH);




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MainPageModule,
    StagePageModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }, ReloadHomeService, IdScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
