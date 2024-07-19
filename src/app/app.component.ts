import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTranslations();
  }

  onPageChange(page: string) {
    this.currentPage = page;
  }

  changeLanguage(language: any) {
    this.language = language;
    this.loadTranslations();
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
