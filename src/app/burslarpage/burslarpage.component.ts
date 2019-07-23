import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {BurslarService} from '../burslar.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-burslarpage',
  templateUrl: './burslarpage.component.html',
  styleUrls: ['./burslarpage.component.less']
})
export class BurslarpageComponent implements OnInit {
  burslar: any;
  totalPageArray: any;
  currentPage: number;
  totalPageNumber: number;

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(private burslarService: BurslarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.currentPage = parseInt(res.page);
      this.burslarService.getBurslar(res.page)
        .subscribe(res => {
          this.burslar = res['results'];
          this.totalPageArray = Array(res['totalpages']).fill(0);
          this.totalPageNumber = res['totalpages'];

          console.log(res);
        })
    })
  }

}
