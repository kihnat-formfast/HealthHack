import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any;

  constructor() { }

  ngOnInit() {
    this.skills = [
      {modName: "Love"},
      {modName: "Nature Lover"},
      {modName: "Heart Disease"},
      {modName: "Pets"},
      {modName: "Video Games"},
      {modName: "Work-life"}
    ];
  }

}
