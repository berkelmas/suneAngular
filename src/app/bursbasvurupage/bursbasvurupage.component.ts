import { Component, OnInit } from '@angular/core';
import { BurslarService } from '../burslar.service';

@Component({
  selector: 'app-bursbasvurupage',
  templateUrl: './bursbasvurupage.component.html',
  styleUrls: ['./bursbasvurupage.component.less']
})
export class BursbasvurupageComponent implements OnInit {
  aktifburslar: any;

  constructor(private burslarService: BurslarService) { }

  ngOnInit() {
    this.burslarService.getAktifBurslar().subscribe(res => {
      this.aktifburslar = res;
    })
  }

}
