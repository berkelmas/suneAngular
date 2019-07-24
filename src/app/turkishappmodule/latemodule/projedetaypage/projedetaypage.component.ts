import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjelerService } from '../../../projeler.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-projedetaypage',
  templateUrl: './projedetaypage.component.html',
  styleUrls: ['./projedetaypage.component.less']
})
export class ProjedetaypageComponent implements OnInit {
  proje: any;
  projeler: any;

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(private route: ActivatedRoute, private projelerService: ProjelerService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.projelerService.getSingleProje(res['id']).subscribe(res => {
        this.proje = res;
      })
    })
    this.projelerService.getProjeler(1).subscribe(res => {
      this.projeler = res['results']
    })
  }

}
