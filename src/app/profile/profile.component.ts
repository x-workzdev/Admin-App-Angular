import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private adminId;
  
  constructor(private loginService  : LoginService, private route : ActivatedRoute, private router : Router) { }
  ngOnInit() {
  }

  onClick()
  {
    this.router.navigate(['']);
  }
}
