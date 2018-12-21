import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-title',
  templateUrl: './panel-title.component.html',
  styleUrls: ['./panel-title.component.scss']
})
export class PanelTitleComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() subTitle: string;
  ngOnInit() {
  }

}
