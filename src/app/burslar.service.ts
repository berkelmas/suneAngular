import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { IGetSingleBursResponse, IGetAllBurslar } from "./models/burslar.model";

@Injectable({
  providedIn: "root"
})
export class BurslarService {
  constructor(private http: HttpClient) {}

  getBurslar(): Observable<IGetAllBurslar> {
    return this.http.get<IGetAllBurslar>(
      `${environment.apiEndpoint}Scholarship/GetAll`
    );
  }

  getAktifBurslar() {
    return this.http.get(`${environment.apiEndpoint}aktifburslar`);
  }

  getSingleBurs(id: string): Observable<IGetSingleBursResponse> {
    return this.http
      .post<IGetSingleBursResponse>(
        `${environment.apiEndpoint}Scholarship/GetById`,
        { id }
      )
      .pipe(catchError(err => throwError(err)));
  }
}
