import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 data = [{Name: "Go for a run" }, {Name: "Take a shower"}];
  constructor() { }

  ngOnInit() {
  }

}
