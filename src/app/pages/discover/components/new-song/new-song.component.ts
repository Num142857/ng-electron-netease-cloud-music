import { Component, OnInit, Input } from '@angular/core';
import {Datum} from '../../../../services/api.interface';
@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.scss']
})
export class NewSongComponent implements OnInit {

  constructor() { }
  @Input() topSong: Datum;
  ngOnInit() {
    // this.topSong.length = 20;
    console.log(this.topSong);
  }

}
