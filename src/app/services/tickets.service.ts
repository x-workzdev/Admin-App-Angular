import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssignTicketDetails } from '../classes/assignTicket-details';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  getTicketsList(): Observable <any> {
    return this.httpClient.get(environment.apiUrl+'viewAllTickets');
  }

  getEngineerEmailIds(): Observable <any> {
    return this.httpClient.get(environment.apiUrl+'viewAllEngineer');
  }

  assignTickets(assignTicket : AssignTicketDetails) : Observable<any> {
    console.log(assignTicket);
    return this.httpClient.put(environment.apiUrl+'assignComplaint',assignTicket,{observe:'response', responseType: 'json'});
  }

  getTicketsListBy(engineerEmailId : String): Observable<any> {
    return this.httpClient.get(environment.apiUrl+`viewAllTickets/${engineerEmailId}`);
  }

}
