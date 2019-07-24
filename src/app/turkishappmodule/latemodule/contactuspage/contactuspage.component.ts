import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  style
} from '@angular/animations';

@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.component.html',
  styleUrls: ['./contactuspage.component.less'],
  animations: [
      trigger('messageOpened', [
        transition('void => opened', [style({transform: 'translateX(400px)'}), animate('400ms ease-in')]),
        transition('opened => void', animate('400ms ease-in', style({transform : 'translateX(400px)'})))
      ]
    )
  ]
})
export class ContactuspageComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  messageSent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);

    this.name = null;
    this.email = null;
    this.message = null;

    this.messageSent = true;
    setTimeout(() => {this.messageSent = false}, 3000);
  }

}
