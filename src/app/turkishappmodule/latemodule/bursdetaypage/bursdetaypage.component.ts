import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { BurslarService } from "../../../burslar.service";
import { environment } from "../../../../environments/environment";
import { IBurs } from "../../../models/burslar.model";

@Component({
  selector: "app-bursdetaypage",
  templateUrl: "./bursdetaypage.component.html",
  styleUrls: ["./bursdetaypage.component.less"]
})
export class BursdetaypageComponent implements OnInit {
  burs: IBurs;
  burslar: any;

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(
    private route: ActivatedRoute,
    private burslarService: BurslarService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(route => {
      this.burslarService.getSingleBurs(route.id).subscribe(res => {
        this.burs = res.result;
      });
    });
    this.burslarService.getBurslar().subscribe(res => {
      this.burslar = res.result;
    });
  }
}
