import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjelerService {

  constructor(private http: HttpClient) {}

  getProjeler(page: number) {
    return this.http.get(`${environment.apiEndpoint}projeler?page=${page}`);
  }

  getSingleProje(id: string) {
    return this.http.get(`${environment.apiEndpoint}singleproje/${id}`);
  }
}
