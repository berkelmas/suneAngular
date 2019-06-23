import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [
    trigger('changeMenuState', [
      transition('void => menuOpened', [
        style({height: 0, opacity : 0}),
        animate('500ms ease-in')
      ]),
      transition('menuOpened => void', [
        animate('500ms ease-in', style({height: 0, opacity : 0}))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  menuOpen: boolean;
  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth > 991) {
      this.menuOpen = true;
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (window.innerWidth < 991) {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
    }

    this.cdr.detectChanges();
  }

  changeMenuState() {
    this.menuOpen = !this.menuOpen;
  }

}
