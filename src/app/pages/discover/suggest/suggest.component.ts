import { Component, OnInit } from '@angular/core';
import { DiscoverService, Recommend, DjRadio } from '../services/discover.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})



export class SuggestComponent implements OnInit {

  constructor(private service: DiscoverService) { }
  recommendList: DjRadio[];
  ngOnInit() {
     this.service.getRecommend().subscribe(res => {
      this.recommendList = res.djRadios;
     });
  }

}
