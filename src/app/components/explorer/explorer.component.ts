import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  @ViewChild('explorer') explorer: ElementRef;

  dragState: boolean;
  mousePX: number;

  constructor() { }

  ngOnInit() {
    document.addEventListener('mousemove', (e) => {
      this.dragging(e);
    });

    document.addEventListener('mouseup', (e) => {
      this.dragState = false;
    });
  }

  dragStart(e) {
    this.dragState = true;
    this.mousePX = e.layerX;
    document.body.style.cursor = 'w-resize';
  }

  dragging(e) {
    if (this.dragState) {
      const offsetX = e.layerX - this.mousePX;
      const explorerDom = this.explorer.nativeElement;
      const width = explorerDom.clientWidth;
      explorerDom.style.width = width + offsetX + 'px';
      this.mousePX = e.layerX;
      console.log(offsetX, width);
    }
  }
 
}
