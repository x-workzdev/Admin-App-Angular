import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpDetails } from '../classes/signup-details';
import { Observable, Observer, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  sendSignUpDetails(signupDetails : SignUpDetails) : Observable<any> {
    console.log(signupDetails);
    return this.httpClient.post(environment.apiUrl+'registration',signupDetails,{observe:'response', responseType: 'json'});
  }
}
