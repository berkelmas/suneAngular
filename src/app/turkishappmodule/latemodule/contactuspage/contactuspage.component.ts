import { Component, OnInit } from "@angular/core";
import { trigger, animate, transition, style } from "@angular/animations";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/contact.service";
import { first } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contactuspage",
  templateUrl: "./contactuspage.component.html",
  styleUrls: ["./contactuspage.component.less"],
  animations: [
    trigger("messageOpened", [
      transition("void => opened", [
        style({ transform: "translateX(400px)" }),
        animate("400ms ease-in")
      ]),
      transition(
        "opened => void",
        animate("400ms ease-in", style({ transform: "translateX(400px)" }))
      )
    ])
  ]
})
export class ContactuspageComponent implements OnInit {
  public contactForm: FormGroup;

  messageSent = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      message: this.fb.control(null, [Validators.required])
    });
  }

  ngOnInit() {}

  handleSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      this.contactService
        .createContact(name, email, message)
        .pipe(first())
        .subscribe(
          res => {
            if (!res.hasError) {
              this.toastr.success(
                "İletişim formu gönderimi başarılı!",
                "Başarılı"
              );
              this.contactForm.reset();
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
