import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  bookList!:Book[];

  constructor( private bookService :BooksService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBooks();
  }

}
