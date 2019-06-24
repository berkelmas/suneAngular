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
    trigger('changeSlideLeft', [
      transition('void => currentSlideLeft',
        [
          style({opacity: 0, transform: 'translateX(100%)'}),
          animate('500ms ease-in')
        ]
      ),
      transition('currentSlideLeft => void',
        [
          style({position : 'absolute', top: 0, left: 0}),
          animate('400ms ease-in', style({opacity: 0}))
        ]
      ),

      transition('void => currentSlideRight',
        [
          style({opacity: 0, transform: 'translateX(-100%)'}),
          animate('500ms ease-in')
        ]
      ),
      transition('currentSlideRight => void',
        [
          style({position : 'absolute', top: 0, left: 0}),
          animate('400ms ease-in', style({opacity: 0}))
        ]
      ),
    ]),

  ]
})
export class SliderComponent implements AfterViewInit {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  sliderCount: number = 3;
  currentSlide: number = 1;

  animationState: string;

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
      this.animationState = "currentSlideRight";
      this.prevSlide();
    } else if (e === this.SWIPE_ACTION.LEFT) {
      this.animationState = "currentSlideLeft";
      this.nextSlide();
    }
  }

}
