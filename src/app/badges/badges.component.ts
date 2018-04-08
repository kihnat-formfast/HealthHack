import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BadgesComponent implements OnInit {

  badges: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/badge').subscribe(data => {
      console.log("Data imported from Database");
      console.log(data);
      this.badges = data;
    });
    // this.badges = [
    //   {name: "Brainiac"},
    //   {name: "Charmer"},
    //   {name: "Hulk"},
    //   {name: "Monkey"},
    //   {name: "The Rock"},
    //   {name: "Sage"},
    //   {name: "Streak"}
    // ];
  }
}
