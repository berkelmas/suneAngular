import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DuyurularService } from '../duyurular.service';

@Component({
  selector: 'app-duyurularpage',
  templateUrl: './duyurularpage.component.html',
  styleUrls: ['./duyurularpage.component.less']
})
export class DuyurularpageComponent implements OnInit {
  duyurular: any;
  totalPageArray: any;
  currentPage: number;
  totalPageNumber: number;

  constructor(private duyurularService: DuyurularService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.currentPage = parseInt(res.page);
      this.duyurularService.getDuyurular(res.page)
        .subscribe(res => {
          this.duyurular = res['results'];
          this.totalPageArray = Array(res['totalpages']).fill(0);
          this.totalPageNumber = res['totalpages'];

          console.log(res);
        })
    })
  }

}
