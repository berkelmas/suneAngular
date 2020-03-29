import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-gonulluolunpage",
  templateUrl: "./gonulluolunpage.component.html",
  styleUrls: ["./gonulluolunpage.component.less"]
})
export class GonulluolunpageComponent implements OnInit {
  public volunteerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.volunteerForm = this.fb.group({
      fullName: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      phone: this.fb.control(null, [Validators.required])
    });
  }

  ngOnInit() {}
}
