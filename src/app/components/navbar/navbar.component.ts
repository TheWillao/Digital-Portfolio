import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() pageEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() openMenu: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitLanguage: EventEmitter<string> = new EventEmitter<string>();
  @Input() translations: any;
  language: string = 'pt';
  currentPage: string = 'about';
  isMobile: boolean = window.innerWidth <= 992;

  constructor(public dialog: MatDialog) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= this.getOffsetTop('tech')) {
      this.currentPage = 'tech';
    } else if (scrollPosition >= this.getOffsetTop('education')) {
      this.currentPage = 'education';
    } else if (scrollPosition >= this.getOffsetTop('exp')) {
      this.currentPage = 'exp';
    } else {
      this.currentPage = 'about';
    }
  }

  private getOffsetTop(id: string): number {
    const element = document.getElementById(id);
    if (element) {
      return element.offsetTop - 200;
    }
    return 0;
  }

  ngOnInit() {}

  openContactsModal() {
    let dialogRef = this.dialog.open(ContactsComponent, {
      height: '400px',
      width: '600px',
      data: { translations: this.translations },
    });
  }

  changeLanguage(event: any) {
    this.language = event.target.value;
    this.emitLanguage.emit(this.language);
  }

  navigateTo(route: string) {
    if (route === 'projects') {
      this.currentPage = route;
      setTimeout(() => {
        this.currentPage = route;
      });
    } else {
      this.currentPage = route;
    }
    this.pageEmitter.emit(route);
  }
}
