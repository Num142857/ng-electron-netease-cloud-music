import { Component, OnInit, Input } from '@angular/core';
import {PersonalizedResult} from '../../../../services/api.interface';
@Component({
  selector: 'app-individuation',
  templateUrl: './individuation.component.html',
  styleUrls: ['./individuation.component.scss']
})
export class IndividuationComponent implements OnInit {

  constructor() { }
  @Input() data: PersonalizedResult;
  ngOnInit () {
  }

}
