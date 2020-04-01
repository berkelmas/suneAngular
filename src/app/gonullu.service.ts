import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../environments/environment";
import { ICreateVolunteerResponse } from "./models/gonullu.model";

@Injectable({
  providedIn: "root"
})
export class GonulluService {
  constructor(private http: HttpClient) {}

  createVolunteer(
    name: string,
    email: string,
    phone: string,
    area: string,
    startDate: Date,
    message: string
  ): Observable<ICreateVolunteerResponse> {
    return this.http
      .post<ICreateVolunteerResponse>(
        `${environment.apiEndpoint}Volunteer/create`,
        {
          name,
          email,
          phone,
          area,
          startDate,
          message
        }
      )
      .pipe(catchError(err => throwError(err)));
  }
}
