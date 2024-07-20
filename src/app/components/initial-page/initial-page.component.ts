import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
})
export class InitialPageComponent implements OnInit {
  @Input() translations: any;
  sendBack: boolean = false;

  constructor(
    private scrollService: ScrollService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.checkScroll();
  }

  checkScroll() {
    this.scrollService.getScrollObservable().subscribe((id) => {
      const section = this.elementRef.nativeElement.querySelector(`#${id}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
