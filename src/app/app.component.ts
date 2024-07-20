import { ScrollService } from './services/scroll.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent) nav!: NavbarComponent;
  title = 'Digital-Portfolio';
  currentPage: string = 'about';
  language: string = 'pt';
  translations: any;

  constructor(private http: HttpClient, private scrollService: ScrollService) {}

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
      return element.offsetTop;
    }
    return 0;
  }

  ngOnInit(): void {
    this.loadTranslations();
  }

  onPageChange(page: string) {
    if (page === 'projects') {
      this.currentPage = page;
      setTimeout(() => {
        this.currentPage = page;
      });
    } else {
      this.currentPage = page;
    }
  }

  changeLanguage(language: any) {
    this.language = language;
    this.loadTranslations();
  }

  scrollToSection(id: string) {
    if (this.currentPage === 'projects') {
      this.scrollService.scrollToSection('about');
      setTimeout(() => {
        this.scrollService.scrollToSection(id);
      });
    } else {
      this.scrollService.scrollToSection(id);
    }
    this.currentPage = id;
  }

  loadTranslations() {
    const url = `/assets/translations/translations.${this.language}.json`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.translations = data;
      },
      error: (error) => {
        console.error('Failed to load translations:', error);
      },
    });
  }
}
