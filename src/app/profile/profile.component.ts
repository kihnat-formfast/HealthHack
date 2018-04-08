import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showLogin:boolean = true;

  constructor() { }

  ngOnInit() {
  }
ToggleLogin():void { this.showLogin = !this.showLogin;}
}


