import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from './books.service';
import { Book } from '../shared/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'book-shop';
  phoneIcon = faPhoneVolume;
  facebookIcon = faFacebook;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  searchResults: Book[] = [];
  searchByTitle!: string | null;
  subscriptions: Subscription[]=[];

  constructor(
    private booksSrvice: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      if (!!params && params['search']){
        this.searchByTitle = params['search'];
      } else {
        this.searchByTitle = null;
      }
      if (!!this.searchByTitle) {
        this.searchResults = this.booksSrvice
          .getBooks()
          .filter((book) => book.title.includes(this.searchByTitle!));
      } else {
        this.searchResults = []
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
