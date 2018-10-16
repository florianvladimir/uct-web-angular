import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ParallaxModule} from 'ngx-parallax';
import {ParallaxScrollComponent} from './parallax/parallax-scroll/parallax-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxScrollComponent
  ],
  imports: [
    BrowserModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
