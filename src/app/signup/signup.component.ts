import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signupForm = new FormGroup({
    emial: new FormControl(''),
    password: new FormControl('')
  });
}
