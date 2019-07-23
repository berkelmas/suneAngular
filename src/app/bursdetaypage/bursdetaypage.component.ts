import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {BurslarService} from '../burslar.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-bursdetaypage',
  templateUrl: './bursdetaypage.component.html',
  styleUrls: ['./bursdetaypage.component.less']
})
export class BursdetaypageComponent implements OnInit {
  burs: any;
  burslar: any;

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(private route: ActivatedRoute, private burslarService: BurslarService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.burslarService.getSingleBurs(res['id']).subscribe(res => {
        this.burs = res;
      })
    })
    this.burslarService.getBurslar(1).subscribe(res => {
      this.burslar = res['results']
    })
  }

}
