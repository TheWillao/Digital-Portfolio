import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}
  private scrollSubject = new Subject<string>();

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }

  scrollToSection(id: string) {
    this.scrollSubject.next(id);
  }
}
