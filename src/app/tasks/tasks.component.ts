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

      const myObj = [{"id":1,"text":"Mary"},{"id":2,"text":"Nancy"},{"id":3,"text":"Paul"},{"id":4,"text":"Cheryl"},{"id":5,"text":"Frances"}];

      const selectedIds = myObj.map(({ id }) => id);
      
      console.log(selectedIds);


      this.tasks = data;
    });
  }



}
