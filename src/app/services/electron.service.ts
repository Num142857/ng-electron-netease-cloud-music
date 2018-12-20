import { Injectable } from '@angular/core';
import {} from 'electron';
// import Fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  constructor() {
        // check if platform is electron
        const isElectron: boolean = window && window['process'] && window['process'].type;

        if (isElectron) {
          // const fs: typeof Fs = window['require']('fs');
          const app: Electron.App = window['require']('electron').remote;
        }
  }
  electron = window['require']('electron');
}
