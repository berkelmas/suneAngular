import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AtolyelerService {
  constructor(private http: HttpClient) {}

  getAtolyeler() {
    return this.http.get(`${environment.apiEndpoint}Workplace/GetAll`);
  }

  getAktifAtolyeler() {
    return this.http.get(`${environment.apiEndpoint}aktifatolyeler`);
  }

  applyAtolye(
    name: string,
    phone: string,
    email: string,
    workplace: string,
    message: string
  ) {
    return this.http
      .post(`${environment.apiEndpoint}Workplace/ApplyWorkplace`, {
        name,
        phone,
        email,
        workplace,
        message,
      })
      .pipe(catchError((err) => throwError(err)));
  }
}
