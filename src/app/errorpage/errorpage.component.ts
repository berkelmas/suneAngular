import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.less']
})
export class ErrorpageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Başak Sanat - Hata !');
    this.meta.addTag({name: 'description', content: 'Burası Hata Sayfasıdır.'})
  }

}
