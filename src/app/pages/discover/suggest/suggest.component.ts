import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Playlist, PersonalizedResult , Datum } from '@services/api.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})



export class SuggestComponent implements OnInit {

  constructor(private service: ApiService) { }
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
     this.service.topSong().subscribe(res => {
     this.topSong = res.data.splice(0, 20);
      console.log( this.topSong);
     });
  }

}
