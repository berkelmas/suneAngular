import { Component, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  animations: [
    trigger('changeSlide', [
      state('currentSlide', style({opacity: 1})),
      state('void', style({opacity: 0, transform: 'translateY(-300px)'})),
      transition('void => currentSlide', animate('1s'))
    ])
  ]
})
export class SliderComponent implements AfterViewInit {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  sliderCount: number = 3;
  currentSlide: number = 1;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
  }

  nextSlide() {
    if ((this.currentSlide + 1) > this.sliderCount) {
      this.currentSlide = 1;
    } else {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if ((this.currentSlide -1) === 0) {
      this.currentSlide = this.sliderCount;
    } else {
      this.currentSlide--;
    }
  }

  swiped(e) {
    console.log(e);
    if (e === this.SWIPE_ACTION.RIGHT) {
      this.prevSlide();
    } else if (e === this.SWIPE_ACTION.LEFT) {
      this.nextSlide();
    }
  }

}
