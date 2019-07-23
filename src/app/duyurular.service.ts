import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DuyurularService {

  constructor(private http: HttpClient) {}

  getDuyurular(page: number) {
    return this.http.get(`${environment.apiEndpoint}duyurular?page=${page}`);
  }
}
