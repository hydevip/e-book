import { Component, OnInit } from '@angular/core';
import { BooksService } from './../books.service';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit{
  bestsellers!: Book[];

  constructor(private bookService :BooksService) {}

    ngOnInit(): void {
    this.bestsellers = this.bookService.getBooks().slice(0, 3);
  }

}
