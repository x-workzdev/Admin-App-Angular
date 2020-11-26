import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, of, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginDetails } from '../classes/login-details';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  sendloginDetails(loginDetails: Object): Observable<any> {
     console.log(loginDetails);
     return this.httpClient.post<LoginDetails>(environment.apiUrl+'login',loginDetails,{observe:'response', responseType: 'json'});
     }
}
