import { Component, OnInit } from '@angular/core';
import {Sqlite} from 'sqlite3';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  constructor() { }
  
  badgeName: string = 'Badges Unlocked';

  ngOnInit() {
  }

}

//var database = new Sqlite<Badges>('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, name TEXT NOT NULL)',
//(row) => {
  //return new Badges(row.id, row.name);
//});