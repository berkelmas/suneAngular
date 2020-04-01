import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { ICreateContactResponse } from "./models/contact.model";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: HttpClient) {}

  createContact(
    name: string,
    email: string,
    message: string
  ): Observable<ICreateContactResponse> {
    return this.http
      .post<ICreateContactResponse>(
        `${environment.apiEndpoint}Contact/create`,
        {
          name,
          message,
          email
        }
      )
      .pipe(catchError(err => throwError(err)));
  }
}
