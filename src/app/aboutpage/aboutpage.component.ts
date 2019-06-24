import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  state,
  style,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.less', '../recentcauses/recentcauses.component.less'],
  animations: [
    trigger('changeTestAnimation', [
      state('void', style({transform: 'translateX(-1000px)'})),
      transition('void => changedAnimation', animate('500ms ease-in')),
      transition('changedAnimation => void',
        [
          style({position : 'absolute', top: 0, left: 0}),
          animate('300ms ease-in', style({transform : 'translateX(1000px)'}))
        ]
      )
    ])
  ]
})
export class AboutpageComponent implements OnInit {
  currentTest: number = 3;
  constructor() {}

  ngOnInit() {
  }

  changeTest(e: number) {
    this.currentTest = e;
  }

  swipe(type: string) {
    if ( type === 'swiperight') {
      if (this.currentTest <= 1) {
        this.currentTest = 3;
      } else {
        this.currentTest--;
      }
    } else if (type === 'swipeleft') {
      if (this.currentTest < 3) {
        this.currentTest++;
      } else {
        this.currentTest = 1;
      }
    }
  }

}
