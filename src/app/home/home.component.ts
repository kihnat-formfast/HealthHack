import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  homes: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/home').subscribe(data => {
      console.log(data);
      this.homes = data;
    });
  }

}