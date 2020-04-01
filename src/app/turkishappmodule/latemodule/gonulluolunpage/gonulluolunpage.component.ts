import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GonulluService } from "../../../gonullu.service";
import { first } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-gonulluolunpage",
  templateUrl: "./gonulluolunpage.component.html",
  styleUrls: ["./gonulluolunpage.component.less"]
})
export class GonulluolunpageComponent implements OnInit {
  public volunteerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gonulluService: GonulluService,
    private toastr: ToastrService
  ) {
    this.volunteerForm = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      phone: this.fb.control(null, [Validators.required]),
      area: this.fb.control(null, [Validators.required]),
      startDate: this.fb.control(null, [Validators.required]),
      message: this.fb.control(null, [Validators.required])
    });
  }

  ngOnInit() {}

  handleSubmit() {
    if (this.volunteerForm.valid) {
      const {
        name,
        email,
        phone,
        area,
        startDate,
        message
      } = this.volunteerForm.value;
      this.gonulluService
        .createVolunteer(name, email, phone, area, startDate, message)
        .pipe(first())
        .subscribe(
          res => {
            if (!res.hasError) {
              this.toastr.success(
                "Gönüllülük formu gönderimi başarılı!",
                "Başarılı"
              );
              this.volunteerForm.reset();
            } else {
              this.toastr.error(res.message, "Hata");
            }
          },
          err => {
            this.toastr.error("Beklenmedik Hata Meydana Geldi.", "Hata");
          }
        );
    } else {
      this.toastr.error("Alanların Doldurulması Gerekmektedir.", "Hata");
    }
  }
}
