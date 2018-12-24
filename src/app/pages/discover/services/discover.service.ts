import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private http: HttpClient) { }
  getRecommend(): Observable<Recommend> {
    return this.http.get<Recommend>('http://118.24.210.32:3000/dj/recommend');
  }
}
export interface Recommend {
  djRadios: DjRadio[];
  name: string;
  code: number;
}

export interface DjRadio {
  id: number;
  name: string;
  picUrl: string;
  programCount: number;
  subCount: number;
  createTime: number;
  categoryId: number;
  category: string;
  rcmdtext: string;
  radioFeeType: number;
  feeScope: number;
  dj: Dj;
  copywriter: string;
}

export interface Dj {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  avatarImgId_str?: string;
}
