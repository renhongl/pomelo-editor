import { Component, OnInit, Inject } from '@angular/core';
import { menus } from './header.constants';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus = menus;

  constructor(@Inject('explorerService') private explorerService) { }

  ngOnInit() {
  }

  openFolder(menu) {
    ipcRenderer.on(menu + '-return', (e, result) => {
      this.explorerService.updateFileList(result);
    });
    ipcRenderer.send(menu);
  }

}
