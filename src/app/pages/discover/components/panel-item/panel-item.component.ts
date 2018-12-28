import { Component, OnInit, Input } from '@angular/core';
import {Playlist} from '../../../../services/api.interface';
@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent implements OnInit {

  constructor() { }
  @Input() data: Playlist;
  ngOnInit() {
  }

}
