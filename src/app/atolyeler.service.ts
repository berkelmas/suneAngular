import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtolyelerService {

  constructor(private http: HttpClient) {}

  getAtolyeler(page: number) {
    return this.http.get(`${environment.apiEndpoint}atolyeler?page=${page}`);
  }

  getAktifAtolyeler() {
    return this.http.get(`${environment.apiEndpoint}aktifatolyeler`);
  }
}
