import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagesComponent } from './stages/stages.component';
import {SlideshowModule} from "ng-simple-slideshow";
import {CustomComponentsModule} from "../custom-components/custom-components.module";

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule,
    CustomComponentsModule
  ],
  declarations: [StagesComponent]
})
export class StagePageModule { }
