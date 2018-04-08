import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  tasks: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/task').subscribe(data => {
      console.log("Data imported from Database");
      console.log(data);
      this.tasks = data;
    });
  }



}
