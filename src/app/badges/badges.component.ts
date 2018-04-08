import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  badges: any;

  constructor() { }

  ngOnInit() {
    this.badges = [
      {name: "Brainiac"},
      {name: "Charmer"},
      {name: "Hulk"},
      {name: "Monkey"},
      {name: "The Rock"},
      {name: "Sage"},
      {name: "Streak"}
    ];
  }

}
