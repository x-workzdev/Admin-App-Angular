import { Component, OnInit,ChangeDetectionStrategy, Inject } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { TicketDetails } from '../classes/ticket-details';
import { TicketsService } from '../services/tickets.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AssignTicketDetails } from '../classes/assignTicket-details';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {DOCUMENT, Location} from '@angular/common'

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewticketsComponent implements OnInit {
  mySubscription: any;

  constructor(private ticketsService:TicketsService,public router:Router,public location: Location,private activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private _document: Document) {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };

    //this.mySubscription = this.router.events.subscribe((event) => {
      //if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        //this.router.navigated = false;
      //}
    //});
   }

  ticketsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  tickets: Observable<TicketDetails[]>;
  ticket : TicketDetails = new TicketDetails();
  assignTicket : AssignTicketDetails = new AssignTicketDetails();
  deleteMessage=false;
  ticketlist:any;
  isRaised = false;
  engineerdetails:any;
  engineerEmailIds:any; 
  ticketStatus = "ASSIGNED";
  ticketComlete = "COMPLETED";
  userRole:string;
  currentUser:string;
  ticketCompanyName:string;
  
  currentRouter = this.router.url;
  ngOnInit() {
     
    // this.router.routeReuseStrategy.shouldReuseRoute = () => {
    //   return false;
    // }

    this.isRaised=false;
    this.dtOptions = {
      pageLength: 10,
      stateSave:true,
      lengthMenu:[[10, 20, 30, -1], [10, 20, 30, "All"]],
      processing: true
    };
    
    this.userRole = sessionStorage.getItem("role");
    this.currentUser = sessionStorage.getItem("currentUser");
    
    if(this.userRole == 'ADMIN'){
    this.ticketsService.getTicketsList().subscribe(data =>{
    this.tickets =data;
    console.log('got data from console='+this.tickets);
    this.dtTrigger.next();
    })
  }
  else{
      this.ticketsService.getTicketsListBy(this.currentUser).subscribe(data =>{  
      this.tickets =data;
      console.log('got data from console='+this.tickets);
      // this.ticketCompanyName = data.registration.companyName;
      this.dtTrigger.next();    
      })
    }

     this.ticketsService.getEngineerEmailIds().subscribe(data =>{  
      this.engineerdetails =data;
      console.log('got data from getEngineerEmailIds()='+this.engineerdetails);
      })
}

// ngOnDestroy() {
//   if (this.mySubscription) {
//     this.mySubscription.unsubscribe();
//   }
// }
   
  ticketform=new FormGroup({
    companyName: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    problem : new FormControl('' , Validators.required),
    engineerEmail : new FormControl('' , Validators.required),
    leadComment : new FormControl(),
    complaintId : new FormControl(),
    clientComment : new FormControl(),
    date :new FormControl(),
    complaintStatus:new FormControl(),
    engineerComment:new FormControl(),
  });

  TicketSelected(ticket:any,cName){
    console.log(ticket);
    this.ticket = ticket;
    this.ticket.companyName=cName;

  }


  asignTicketDetails(asignticket){
    this.assignTicket =new AssignTicketDetails(); 
    this.assignTicket.companyName=this.CompanyName.value;
    this.assignTicket.model = this.Model.value;
    this.assignTicket.serialNo = this.SerialNo.value;
    this.assignTicket.mcType = this.McType.value;
    this.assignTicket.problem = this.Problem.value;
    this.assignTicket.engineerEmail = this.EngineerEmailId.value;
    this.assignTicket.leadComment = this.LeadComment.value;
    this.assignTicket.date = this.Date.value;
    this.assignTicket.leadComment = this.LeadComment.value;
    this.assignTicket.complaintStatus = this.ComplaintStatus.value;
    this.assignTicket.complaintId = this.ComplaintId.value;
    this.assignTicket.engineerComment = this.EngineerComment.value;
 
   this.ticketsService.assignTickets(this.assignTicket).subscribe(
    response => {     
      
      var statusCode = response.body.statusCode;
      console.log('Response Code ='+statusCode);
      if(statusCode==201){
        //this.ngOnInit();
        alert(response.body.message);        
        //this.router.navigate(['/clients', response]);
        }

        else if (statusCode == 200) {
          this.isRaised=true;
          //alert(response.body.message);
          //this.refreshPage();
          //location.reload();
          //this.reLoad();
          //debugger
          // this.router.navigateByUrl('/tickets');
          //this.parent();
          //this.router.onSameUrlNavigation = 'reload';
          //this.ngOnInit();
          //this.router.navigate(['/tickets']);
        }
       else
       {
        alert(response.body.message);
        //this.router.navigate(['/signup']);
       }
      error =>((error: any) => {
        console.log("Error in authentication");
        if (error.status === 500) {
            return Observable.throw(new Error(error.status));
        }
        else if (error.status === 400) {
            return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
            return Observable.throw(new Error(error.status));
        }
        else if (error.status === 406) {
            return Observable.throw(new Error(error.status));
           }
         });  
      });
    }
    
    onChange(){
      this.isRaised=true;
    }
    
  get EngineerEmailId(){
    return this.ticketform.get('engineerEmail');
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

  get LeadComment(){
    return this.ticketform.get('leadComment');
  } 
  
  get ComplaintId(){
    return this.ticketform.get('complaintId');
  }

  get ClientComment(){
    return this.ticketform.get('clientComment');
  }

  get Date(){
    return this.ticketform.get('date');
  }

  get ComplaintStatus(){
    return this.ticketform.get('complaintStatus');
  }

  get EngineerComment(){
    return this.ticketform.get('engineerComment');
  }
   
  refresh(): void {
    this.router.navigateByUrl("/home", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this.location.path()));
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  reLoad(){
    this.router.navigate([this.currentRouter])
 }
 parent(){
     this.router.navigate(['../'], { relativeTo: this.activatedRoute });
 }

 refreshPage() {
  this._document.defaultView.location.reload();
}
}
