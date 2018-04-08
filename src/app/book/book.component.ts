import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('LOOK HERE FUCKWIT');
    this.http.get('../models/book').subscribe(data => {
      
      console.log(data);
      this.books = data;
    });
    this.books = [ {title: 'Test', author: 'Author here'}];
  }

}
