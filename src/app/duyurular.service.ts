import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { IGetDuyurularResponse } from "./models/duyurular.model";

@Injectable({
  providedIn: "root"
})
export class DuyurularService {
  constructor(private http: HttpClient) {}

  getDuyurular(
    pageNumber: number,
    pageSize: number
  ): Observable<IGetDuyurularResponse> {
    return this.http
      .post<IGetDuyurularResponse>(`${environment.apiEndpoint}Notice/GetAll`, {
        pageNumber,
        pageSize
      })
      .pipe(catchError(err => throwError(err)));
  }
}
