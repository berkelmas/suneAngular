import { Component, OnInit } from "@angular/core";
import { AtolyelerService } from "../../../atolyeler.service";

@Component({
  selector: "app-atolyebasvurupage",
  templateUrl: "./atolyebasvurupage.component.html",
  styleUrls: ["./atolyebasvurupage.component.less"]
})
export class AtolyebasvurupageComponent implements OnInit {
  aktifatolyeler: any;

  constructor(private atolyelerService: AtolyelerService) {}

  ngOnInit() {
    this.atolyelerService.getAtolyeler().subscribe(res => {
      this.aktifatolyeler = res["result"];
    });
  }
}
