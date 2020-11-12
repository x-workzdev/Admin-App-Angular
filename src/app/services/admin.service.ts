import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, of, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AdminDetails } from '../classes/admin-details';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  sendAdminDetails(adminDetails : AdminDetails) : Observable<any> {
    console.log(adminDetails);
    return this.httpClient.post(environment.apiUrl+'login',adminDetails);
  }

  // login(adminDetail : AdminDetails) : Observable<any>
  // {   console.log('adminDetail in login S='+adminDetail);
  //     let url = environment.apiUrl+ + "login";
  //     return this.httpClient.post(url, adminDetail);
  // }
  
  authenticate(username:any, password:any) {
    if (username === "xworkzdev@gmail.com" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
   }

  logout() 
  { 
    sessionStorage.removeItem('username');
    this.router.navigate(['']);


  }
}
