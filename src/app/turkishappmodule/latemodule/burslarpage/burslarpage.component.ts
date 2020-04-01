import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { BurslarService } from "../../../burslar.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-burslarpage",
  templateUrl: "./burslarpage.component.html",
  styleUrls: ["./burslarpage.component.less"]
})
export class BurslarpageComponent implements OnInit {
  burslar: any;
  totalPageArray: any;
  currentPage: number;
  totalPageNumber: number;

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(
    private burslarService: BurslarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.currentPage = parseInt(res.page, 10);
      this.burslarService.getBurslar().subscribe(res => {
        this.burslar = res["result"];
        this.totalPageArray = Array(1).fill(0);
        this.totalPageNumber = 1;

        console.log(res);
      });
    });
  }
}
