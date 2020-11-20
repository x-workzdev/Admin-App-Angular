import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
   
  isLoggedIn() {
     let user = sessionStorage.getItem('username')
     console.log(!(user === null))
     return !(user === null)
     }

  logout() 
   { 
    sessionStorage.removeItem('emailId');
    this.router.navigate(['/login']);
    }
}
