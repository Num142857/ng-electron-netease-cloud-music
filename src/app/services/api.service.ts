import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Recommend, Personalized, TopSong} from './api.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }
  baseUrl: String = 'http://118.24.210.32:3000';
  getRecommend(): Observable<Recommend> {
    return this.http.get<Recommend>(`${this.baseUrl}/top/playlist?limit=8`);
  }
  getPersonalized(): Observable<Personalized> {
    return this.http.get<Personalized>(`${this.baseUrl}/personalized?limit=4`);
  }
  topSong(): Observable<TopSong> {
    return this.http.get<TopSong>(`${this.baseUrl}/top/song?limit=20`);
  }
}
