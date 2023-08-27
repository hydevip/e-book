import { Component, OnInit } from '@angular/core';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from './books.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'book-shop';
  phoneIcon = faPhoneVolume;
  facebookIcon = faFacebook;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  searchResults: Book[] = [];
  searchByTitle!: string | null;

  constructor(
    private booksSrvice: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('this.route.queryParams:::', this.route.queryParams);

    this.route.queryParams.subscribe((params) => {
      console.log('params::', params);
      if (!!params && params['search']) this.searchByTitle = params['search'];
      if (!!this.searchByTitle) {
        this.searchResults = this.booksSrvice
          .getBooks()
          .filter((book) => book.title.includes(this.searchByTitle!));
      } else {
        this.searchResults = []
      }
    });
    console.log('TEST', this.route.snapshot.queryParamMap);
  }
}
