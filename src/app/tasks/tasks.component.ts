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
    this.http.get('/task/top').subscribe(data => {
      console.log("Data imported from Database");
      console.log(data);
      //limited: data.find(function(elem) {return elem.Id < 10;});

      var array1 = [5, 12, 8, 130, 44];

      var found = array1.find(function (element) {
        return element > 10;
      });

      console.log(found);

      this.tasks = data;
    });
  }



}
