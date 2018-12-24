import { Component, OnInit, Input } from '@angular/core';
import {DjRadio} from '../../services/discover.service';
@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent implements OnInit {

  constructor() { }
  @Input() data: DjRadio;
  ngOnInit() {
    console.log(this.data);
  }

}
