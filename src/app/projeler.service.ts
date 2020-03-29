import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import {
  IGetAllProjelerResponse,
  IGetSingleProjeResponse
} from "./models/projeler.model";

@Injectable({
  providedIn: "root"
})
export class ProjelerService {
  constructor(private http: HttpClient) {}

  getProjeler(
    pageNumber: number,
    pageSize: number
  ): Observable<IGetAllProjelerResponse> {
    return this.http
      .post<IGetAllProjelerResponse>(
        `${environment.apiEndpoint}Project/GetAll`,
        {
          pageNumber,
          pageSize
        }
      )
      .pipe(catchError(err => throwError(err)));
  }

  getSingleProje(id: string): Observable<IGetSingleProjeResponse> {
    return this.http
      .post<IGetSingleProjeResponse>(
        `${environment.apiEndpoint}Project/GetById`,
        {
          id
        }
      )
      .pipe(catchError(err => throwError(err)));
  }
}
