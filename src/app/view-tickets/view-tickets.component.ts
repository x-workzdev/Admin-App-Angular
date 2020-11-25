import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TicketDetails } from '../classes/ticket-details';
import { TicketsService } from '../services/tickets.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewticketsComponent implements OnInit {

  constructor(private ticketsService:TicketsService) { }

  ticketsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  tickets: Observable<TicketDetails[]>;
  ticket : TicketDetails = new TicketDetails();
  deleteMessage=false;
  ticketlist:any;
  isasiged = false;
  public engineerEmailIds:any; 
  public fields:Object;  
  public text:String; 

  ngOnInit() {
    this.isasiged=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.ticketsService.getTicketsList().subscribe(data =>{  
    this.tickets =data;
    console.log('got data from console='+this.tickets);
    this.dtTrigger.next();
    })
    this.ticketsService.getEngineerEmailIds().subscribe(data =>{  
      this.engineerEmailIds =data;
      console.log('got data from getEngineerEmailIds()='+this.engineerEmailIds);
      this.fields = { text: 'emailId', value: 'Id' };
      this.text = "Select a game";
      })
  }
   
  ticketform=new FormGroup({
    companyName: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    problem : new FormControl('' , Validators.required),
    emailId : new FormControl('' , Validators.required),
    leadComment : new FormControl(),
    complaintId: new FormControl(),
  });

  TicketSelected(ticket:any){
    console.log(ticket);
    this.ticket = ticket;
  }


  asignTicketDetails(asignticket){
    this.ticket=new TicketDetails(); 
    this.ticket.companyName=this.CompanyName.value;
    this.ticket.model = this.Model.value;
    this.ticket.serialNo = this.SerialNo.value;
    this.ticket.mcType = this.McType.value;
    this.ticket.problem = this.Problem.value;
    this.ticket.emailId = this.EmailId.value;
   
   this.ticketsService.getTicketsList().subscribe(
    data => {     
      this.isasiged=true;
      this.ticketsService.getTicketsList().subscribe(data =>{
        this.tickets =data
        })
    },
    error => console.log(error));
  } 

  get EmailId(){
    return this.ticketform.get('emailId');
  }

  get CompanyName(){
    return this.ticketform.get('companyName');
  }

  get SerialNo(){
    return this.ticketform.get('serialNo');
  }
  
  get Model(){
    return this.ticketform.get('model');
  }
  
  get McType(){
    return this.ticketform.get('mcType');
  }

  get Problem(){
    return this.ticketform.get('problem');
  }

}
