import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private http: HttpClient) {
  }
  baseUrl: String = 'http://118.24.210.32:3000';
  getRecommend(): Observable<Recommend> {
    return this.http.get<Recommend>(`${this.baseUrl}/top/playlist?limit=8`);
  }
  getPersonalized(): Observable<Personalized> {
    return this.http.get<Personalized>(`${this.baseUrl}/personalized?limit=4`);
  }
  toSong(): Observable<TopSong> {
    return this.http.get<TopSong>(`${this.baseUrl}/top/song?limit=20`);
  }
}
export interface Recommend {
  playlists: Playlist[];
  total: number;
  code: number;
  more: boolean;
  cat: string;
}

export interface Playlist {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  coverImgId: number;
  description: string;
  tags: string[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks?: any;
  subscribers: (Subscriber | Subscribers2)[];
  subscribed?: any;
  commentThreadId: string;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  shareCount: number;
  coverImgId_str: string;
  commentCount: number;
  alg: string;
}

export interface Subscribers2 {
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
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  avatarImgId_str: string;
}

export interface Subscriber {
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
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
}

export interface Creator {
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
  expertTags?: string[];
  experts?: Expert;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  avatarImgId_str?: string;
}

export interface Expert {
  '1': string;
  '2': string;
}


export interface Personalized {
  hasTaste: boolean;
  code: number;
  category: number;
  result: PersonalizedResult[];
}

export interface PersonalizedResult {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}


export interface TopSong {
  data: Datum[];
  code: number;
}

export interface Datum {
  starred: boolean;
  popularity: number;
  starredNum: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  mp3Url?: string;
  rtUrls?: any;
  commentThreadId: string;
  fee: number;
  artists: Artist[];
  audition?: any;
  ringtone?: string;
  disc: string;
  no: number;
  status: number;
  mvid: number;
  ftype: number;
  rtype: number;
  rurl?: any;
  copyFrom: string;
  album: Album;
  alias: string[];
  hMusic: HMusic;
  mMusic: HMusic;
  lMusic?: HMusic;
  crbt?: any;
  bMusic?: HMusic;
  rtUrl?: any;
  position: number;
  duration: number;
  copyrightId: number;
  score: number;
  name: string;
  id: number;
  exclusive: boolean;
  privilege: Privilege;
  transNames?: string[];
}

interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
}

interface HMusic {
  volumeDelta: number;
  playTime: number;
  dfsId: number;
  sr: number;
  bitrate: number;
  name?: string;
  id: number;
  size: number;
  extension: string;
}

interface Album {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  commentThreadId: string;
  picUrl: string;
  artists: Artist[];
  pic: number;
  status: number;
  publishTime: number;
  company?: string;
  briefDesc: string;
  picId: number;
  artist: Artist;
  alias: string[];
  blurPicUrl: string;
  companyId: number;
  description: string;
  subType: string;
  tags: string;
  copyrightId: number;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  transNames?: string[];
}

interface Artist {
  img1v1Id: number;
  topicPerson: number;
  picUrl: string;
  albumSize: number;
  img1v1Url: string;
  trans: string;
  musicSize: number;
  briefDesc: string;
  picId: number;
  alias: any[];
  followed: boolean;
  name: string;
  id: number;
  img1v1Id_str: string;
}
