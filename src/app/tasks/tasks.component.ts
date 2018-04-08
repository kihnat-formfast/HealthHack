import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : any;

  constructor() { }

  ngOnInit() {
    this.tasks = [
      {name: "Go for a run!"},
      {name: "Eat Healthy!"}
    ];
  }

}
