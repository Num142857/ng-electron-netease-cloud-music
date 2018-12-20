import { Component, OnInit } from '@angular/core';
import {ElectronService} from '@services/electron.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})

export class HeadComponent implements OnInit {

  constructor(private electronService: ElectronService) {
  }
  ipcRenderer = this.electronService.electron.ipcRenderer;
  ngOnInit() {

  }
  mini(event: any): void {
    this.ipcRenderer.send('window-min');
  }
  expand(event: any): void {
    this.ipcRenderer.send('window-max');
  }
  close(event: any): void {
    this.ipcRenderer.send('window-close');
  }

}
