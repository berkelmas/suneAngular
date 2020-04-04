import { Component, OnInit } from "@angular/core";
import { AtolyelerService } from "../../../atolyeler.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-atolyebasvurupage",
  templateUrl: "./atolyebasvurupage.component.html",
  styleUrls: ["./atolyebasvurupage.component.less"],
})
export class AtolyebasvurupageComponent implements OnInit {
  aktifatolyeler: any;
  itemForm: FormGroup;

  constructor(
    private atolyelerService: AtolyelerService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.itemForm = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      workplace: this.fb.control(null, [Validators.required]),
      message: this.fb.control(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.atolyelerService.getAtolyeler().subscribe((res) => {
      this.aktifatolyeler = res["result"];
    });
  }

  handleSubmit() {
    if (this.itemForm.valid) {
      this.atolyelerService
        .applyAtolye(
          this.itemForm.value.name,
          this.itemForm.value.phone,
          this.itemForm.value.email,
          this.itemForm.value.workplace,
          this.itemForm.value.message
        )
        .subscribe(
          (res) => {
            if (!res["hasError"]) {
              this.toastr.success(
                "Gönüllülük formu gönderimi başarılı!",
                "Başarılı"
              );
              this.itemForm.reset();
            } else {
              this.toastr.error(res["message"], "Hata");
            }
          },
          (err) => this.toastr.error("Beklenemedik Hata Meydana Geldi.", "Hata")
        );
    } else {
      this.toastr.error("Geçerli Form Girmeniz Gerekmektedir.", "Hata");
    }
  }
}
