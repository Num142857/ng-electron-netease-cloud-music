import { Component, OnInit } from '@angular/core';
import { DiscoverService, Playlist, PersonalizedResult , Datum } from '../services/discover.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})



export class SuggestComponent implements OnInit {

  constructor(private service: DiscoverService) { }
  recommendList: Playlist[];
  personalized: PersonalizedResult[];
  topSong: Datum[];
  ngOnInit() {
     this.service.getRecommend().subscribe(res => {
      this.recommendList = res.playlists;
     });
     this.service.getPersonalized().subscribe(res => {
      this.personalized = res.result;
     });
     this.service.toSong().subscribe(res => {
      this.topSong = res.data;
     });
  }

}
