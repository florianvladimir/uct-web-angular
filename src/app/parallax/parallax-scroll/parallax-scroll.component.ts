import {Component, Input, OnInit} from '@angular/core';
import {Import} from '@angular/compiler-cli/src/ngtsc/host';
import {style} from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'parallax-scroll',
  templateUrl: './parallax-scroll.component.html',
  styleUrls: ['./parallax-scroll.component.css'],
})
export class ParallaxScrollComponent implements OnInit {

  constructor() {}

  @Input()
  public title: string;

  @Input()
  public logoPath: string;

  @Input()
  public backgroundPicture: string;

  public picID: string;

  ngOnInit() {
    const arr = this.backgroundPicture.split('/');
    const len =  arr[arr.length - 1 ];
    this.picID = len.split('.')[0];
    console.log(this.picID);
    console.log(this.backgroundPicture);
    const css = '.p' + this.picID + '{\n' +
      '  box-sizing: border-box;\n' +
      '  min-height: 100vh;\n' +
      '  padding: 30vw 0 5vw;\n' +
      '  position: relative;\n' +
      '  transform-style: inherit;\n' +
      '  width: 100vw;\n' +
      '}';
    const css2 = '.p' + this.picID + ', .p' + this.picID + ':before{\n' +
      '  background: 50% 50% / cover;\n' +
      '}';

    const css3 = '.p' + this.picID + '::before{\n' +
      'bottom: 0;\n' +
      'content: "";\n' +
      'left: 0;\n' +
      'position: absolute;\n' +
      'right: 0;\n' +
      'top: 0;\n' +
      'display: block;\n' +
      'background-image: url("' + this.backgroundPicture + '");\n' +
      'background-size: cover;\n' +
      'transform-origin: center center 0;\n' +
      'transform: translateZ(-1px) scale(2);\n' +
      'z-index: -1;\n' +
      '/*min-height: 100vh;*/\n' +
      '}';
    $(document).ready(function() {
      $('style').append(css, css2, css3);
    });
  }

}
