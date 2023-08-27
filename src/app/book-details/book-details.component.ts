import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  book!:Book;
  id!: string;

  constructor(private booksSrvice: BooksService ,
    private route: ActivatedRoute,
    private router: Router) {
}

ngOnInit(): void {
  this.route.params.subscribe((params: Params)=> {
    this.id = params['id'];
    this.book = this.booksSrvice.getBook(this.id);

  })
}

}
