import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  modules: any;

  constructor() { }

  ngOnInit() {
    this.modules = [
      {modName: "Love"},
      {modName: "Nature Lover"},
      {modName: "Heart Disease"},
      {modName: "Pets"},
      {modName: "Video Games"},
      {modName: "Work-life"}
    ];
  }

}
