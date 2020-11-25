import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
