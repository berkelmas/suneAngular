import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AtolyelerService {
  constructor(private http: HttpClient) {}

  getAtolyeler() {
    return this.http.get(`${environment.apiEndpoint}Workplace/GetAll`);
  }

  getAktifAtolyeler() {
    return this.http.get(`${environment.apiEndpoint}aktifatolyeler`);
  }
}
