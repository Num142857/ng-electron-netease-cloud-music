import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get('http://118.24.210.32:3000/dj/recommend');
  }
}
