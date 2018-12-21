import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../services/discover.service';
@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {

  constructor(private service: DiscoverService) { }

  ngOnInit() {
    this.service.getConfig().subscribe((resp) => {
      console.log(resp);
    });
  }

}
