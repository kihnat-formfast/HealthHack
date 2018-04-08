import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModulesComponent implements OnInit {

  modules: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/module').subscribe(data => {
      console.log("Data imported from Database");
      console.log(data);
      this.modules = data;
    });

    // this.modules = [
    //   {modName: "Love"},
    //   {modName: "Nature Lover"},
    //   {modName: "Heart Disease"},
    //   {modName: "Pets"},
    //   {modName: "Video Games"},
    //   {modName: "Work-life"}
    // ];
  }

}
