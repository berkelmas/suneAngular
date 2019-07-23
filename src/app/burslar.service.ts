import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BurslarService {

  constructor(private http: HttpClient) {}

  getBurslar(page: number) {
    return this.http.get(`${environment.apiEndpoint}burslar?page=${page}`);
  }

  getAktifBurslar() {
    return this.http.get(`${environment.apiEndpoint}aktifburslar`);
  }

  getSingleBurs(id: string) {
    return this.http.get(`${environment.apiEndpoint}singleburs/${id}`);
  }
}
