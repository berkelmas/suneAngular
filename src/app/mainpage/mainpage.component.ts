import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less']
})
export class MainpageComponent implements OnInit {
  offset: number = 100;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Başak Sanat - Ana Sayfa');
    this.meta.addTag({name: 'description', content: 'Burası Başak Sanat Vakfının Ana Sayfasıdır.'})
  }

}
