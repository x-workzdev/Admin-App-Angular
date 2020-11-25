import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientDetails } from '../classes/client-details';
import { Observable, Observer, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  getClientsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl+'registeredClient');
  }

  createClient(client: object): Observable<object> {
    return this.httpClient.post(environment.apiUrl+'registration', client);
  }

  deleteClient(companyName: String): Observable<any> {
    return this.httpClient.delete(environment.apiUrl+`deleteClient/${companyName}`, {observe:'response', responseType: 'json'});
  }

  getClient(company: String): Observable<Object> {
    return this.httpClient.get(environment.apiUrl+'Client/${companyName}');
  }

  updateClient(company: String, value: any): Observable<Object> {
    return this.httpClient.post(environment.apiUrl+'update-client/${companyName}', value);
  }
}
