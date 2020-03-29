import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjelerService } from "../../../projeler.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-projelerpage",
  templateUrl: "./projelerpage.component.html",
  styleUrls: ["./projelerpage.component.less"]
})
export class ProjelerpageComponent implements OnInit {
  projeler: any;
  totalPageArray: any;
  currentPage: number;
  totalPageNumber: number;

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(
    private projelerService: ProjelerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.currentPage = parseInt(res.page, 10);
      this.projelerService.getProjeler(res.page, 3).subscribe(proje => {
        this.projeler = proje.result;
        this.totalPageArray = Array(proje.resultCount).fill(0);
        this.totalPageNumber = proje.resultCount;

        console.log(proje);
      });
    });
  }
}
