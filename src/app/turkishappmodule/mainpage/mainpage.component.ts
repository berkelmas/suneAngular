import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

import { ProjelerService } from "../../projeler.service";
import { DuyurularService } from "../../duyurular.service";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.less"]
})
export class MainpageComponent implements OnInit {
  offset: number = 100;
  projeler: any;
  duyurular: any;

  constructor(
    private title: Title,
    private meta: Meta,
    private duyurularService: DuyurularService,
    private projelerService: ProjelerService
  ) {}

  ngOnInit() {
    this.title.setTitle("Başak Sanat - Ana Sayfa");
    this.meta.addTag({
      name: "description",
      content: "Burası Başak Sanat Vakfının Ana Sayfasıdır."
    });

    // this.duyurularService
    //   .getDuyurular(1)
    //   .subscribe(res => (this.duyurular = res["results"]));
    this.projelerService.getProjeler(1, 10).subscribe(res => {
      console.log("DasSADDSA");
      console.log(res.result);
      this.projeler = res.result;
    });
  }
}
