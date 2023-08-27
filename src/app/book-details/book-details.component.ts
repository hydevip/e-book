import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../../shared/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy{
  book!:Book;
  id!: string;
  subscriptions: Subscription[]=[]

  constructor(private booksSrvice: BooksService ,
    private route: ActivatedRoute,
    private router: Router) {
}

ngOnInit(): void {
  const subscription = this.route.params.subscribe((params: Params)=> {
  this.subscriptions.push(subscription);
    this.id = params['id'];
    this.book = this.booksSrvice.getBook(this.id);

  })
}
ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
}

}
