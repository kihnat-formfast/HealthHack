import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html', //app-login
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: {
    gamerTag: string,
    email: any,
    passowrd: any

  }


  constructor() { }
  // router:Router

  ngOnInit() {
  }


  // interface User {
  //   gamerTag: any,
  //   email: any,
  //   password: any
  // }

}
