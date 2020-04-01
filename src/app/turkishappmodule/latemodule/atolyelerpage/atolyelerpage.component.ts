import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AtolyelerService } from "../../../atolyeler.service";

@Component({
  selector: "app-atolyelerpage",
  templateUrl: "./atolyelerpage.component.html",
  styleUrls: ["./atolyelerpage.component.less"]
})
export class AtolyelerpageComponent implements OnInit {
  atolyeler: any;
  totalPageArray: any;
  currentPage: number;
  totalPageNumber: number;

  constructor(
    private atolyelerService: AtolyelerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.currentPage = parseInt(res.page, 10);
      this.atolyelerService.getAtolyeler().subscribe(res => {
        this.atolyeler = res["result"];
        this.totalPageArray = Array(1).fill(0);
        this.totalPageNumber = 1;
      });
    });
  }
}
