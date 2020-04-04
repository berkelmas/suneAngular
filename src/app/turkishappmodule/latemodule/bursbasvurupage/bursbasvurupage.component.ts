import { Component, OnInit } from "@angular/core";
import { BurslarService } from "../../../burslar.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-bursbasvurupage",
  templateUrl: "./bursbasvurupage.component.html",
  styleUrls: ["./bursbasvurupage.component.less"],
})
export class BursbasvurupageComponent implements OnInit {
  aktifburslar: any;
  itemForm: FormGroup;

  constructor(
    private burslarService: BurslarService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.itemForm = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      scholarship: this.fb.control(null, [Validators.required]),
      message: this.fb.control(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.burslarService.getBurslar().subscribe((res) => {
      this.aktifburslar = res["result"];
    });
  }

  handleSubmit() {
    if (this.itemForm.valid) {
      this.burslarService
        .applyBurs(
          this.itemForm.value.name,
          this.itemForm.value.phone,
          this.itemForm.value.email,
          this.itemForm.value.scholarship,
          this.itemForm.value.message
        )
        .subscribe(
          (res) => {
            if (!res["hasError"]) {
              this.toastr.success("Burs formu gönderimi başarılı!", "Başarılı");
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
