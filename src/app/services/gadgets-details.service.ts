import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientDetails } from '../classes/client-details';
import { Observable, Observer, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GadgetDetails } from '../classes/Gadgets-details';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  getGadgetsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl+"viewAllGadgets");
  }

}
