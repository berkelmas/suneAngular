import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProjelerService } from "../../../projeler.service";
import { environment } from "../../../../environments/environment";
import { IProje } from "src/app/models/projeler.model";

@Component({
  selector: "app-projedetaypage",
  templateUrl: "./projedetaypage.component.html",
  styleUrls: ["./projedetaypage.component.less"]
})
export class ProjedetaypageComponent implements OnInit {
  proje: IProje;
  projeler: IProje[];

  apiMediaEndpoint: string = environment.apiMediaEndpoint;

  constructor(
    private route: ActivatedRoute,
    private projelerService: ProjelerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.projelerService.getSingleProje(res.id).subscribe(proje => {
        console.log(proje);
        this.proje = proje.result;
      });
    });
    this.projelerService.getProjeler(1, 10).subscribe(res => {
      this.projeler = res.result;
    });
  }
}
