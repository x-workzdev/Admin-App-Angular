import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';
  fullName:any;
  constructor(private router : Router) { }
  userId:string;
  userRole:any;

  condition=false;
  countChangedHandler(event:boolean){
    this.condition=event
    console.log("Success Event Handling="+this.condition);
    if(this.condition){
    this.userId = sessionStorage.getItem("currentUser");
    this.fullName = sessionStorage.getItem("name");
    this.userRole = sessionStorage.getItem("role");
    console.log('user role ='+this.userRole);
    console.log('current user='+this.userId);
    }
  }

  logout()
  { 
   this.condition=false;
   window.sessionStorage.removeItem("currentUser");
   this.router.navigate(['/login']);
   }
 
  
}
