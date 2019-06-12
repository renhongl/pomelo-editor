import { Component, OnInit } from '@angular/core';

import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-code-content',
  templateUrl: './code-content.component.html',
  styleUrls: ['./code-content.component.scss']
})
export class CodeContentComponent implements OnInit {

  code: string;
  config = {
    mode: { name: 'javascript', highlightFormatting: true },
    lineNumbers: true,
    theme: 'material',
    indentUnit: 4,
    showCursorWhenSelecting: true,
    autofocus: true,
    cursorScrollMargin: 5,
    cursorHeight: 1,
    spellcheck: true,
    activeLine: true,
    autocorrect: true,
    lineWrapping: true
  };

  constructor() {
    this.code = `
function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
              find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}
    `;
  }

  ngOnInit() {
  }

}
