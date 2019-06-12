import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  @ViewChild('explorer', {static: false}) explorer: ElementRef;

  dragState: boolean;
  mousePX: number;
  fileList: Array<string>;

  constructor(@Inject('explorerService') private explorerService) {
    this.fileList = explorerService.getFileList().subscribe(result => {
      this.fileList = result;
    });
  }

  ngOnInit() {
    document.addEventListener('mousemove', (e) => {
      this.dragging(e);
    });

    document.addEventListener('mouseup', (e) => {
      this.dragState = false;
      document.body.style.cursor = 'default';
    });
  }

  dragStart(e) {
    this.dragState = true;
    this.mousePX = e.layerX;
    document.body.style.cursor = 'w-resize';
  }

  getMini(n1, n2) {
    if (n1 > n2) {
      return n2;
    }
    return n1;
  }

  dragging(e) {
    if (this.dragState) {
       const codeContent: HTMLElement = document.querySelector('.code-content');
        const mainContent: HTMLElement = document.querySelector('.main-content');
        const offsetX = e.layerX - this.mousePX;
        const explorerDom = this.explorer.nativeElement;
        const width = explorerDom.clientWidth;
        const updatedWidth = this.getMini(width + offsetX, mainContent.clientWidth * 0.9);
        explorerDom.style.width = updatedWidth + 'px';
        codeContent.style.width = mainContent.clientWidth - explorerDom.clientWidth + 'px';
        this.mousePX = e.layerX;
    }
  }
}
