import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  private fileListSource = new Subject<string>();

  constructor() { }

  updateFileList(list) {
    this.fileListSource.next(list);
  }

  getFileList() {
    return this.fileListSource.asObservable();
  }
}
