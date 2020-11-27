 import { Component, OnInit } from '@angular/core';
import { ClientDetailsService } from '../services/client-details.service';
import { Observable,Subject } from "rxjs";
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ClientDetails } from '../classes/client-details';

 @Component({
   selector: 'app-view-client-registers',
   templateUrl: './view-client-registers.component.html',
   styleUrls: ['./view-client-registers.component.scss']
 })
 export class ViewClientRegistersComponent  {

  constructor(private clientdetailService:ClientDetailsService) { }

  clientsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  clients: Observable<ClientDetails[]>;
  client : ClientDetails = new ClientDetails();
  deleteMessage=false;
  clientlist:any;
  isupdated = false; 
  isDeleted:boolean = false;  
  deleteClientDetail:any;

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 10,
      stateSave:true,
      lengthMenu:[[10, 20, 30, -1], [10, 20, 30, "All"]],
      processing: true
    };   
    this.clientdetailService.getClientsList().subscribe(data =>{  
    this.clients =data;
    console.log('got data from console='+this.clients);
    this.dtTrigger.next();
    })
  }

  deleteclient(companyName: String) {
    console.log("company in delete client="+companyName)
    this.clientdetailService.deleteClient(companyName)
      .subscribe(
        data => {
          this.isDeleted = true;
          console.log(data);
          this.deleteMessage=true;
          this.clientdetailService.getClientsList().subscribe(data =>{
            this.clients =data
            })
        },
        error => console.log(error));
  }

  tempDeleteClient(clientCompany:any){
    this.isDeleted=false;
    this.deleteClientDetail = clientCompany;
    console.log('deleteClientDetail='+this.deleteClientDetail);
  }


  updateclient(companyName: String){
    this.clientdetailService.getClient(companyName)
      .subscribe(
        data => {
          this.clientlist=data           
        },
        error => console.log(error));
  }

  ClientSelected(client:any){
    this.client = client;
  }

  clientupdateform=new FormGroup({
    customerName: new FormControl('' , Validators.required),
    companyName: new FormControl('' , Validators.required),
    emailId: new FormControl('', Validators.required),
    contactNumber : new FormControl('' , Validators.required),
    address : new FormControl('' , Validators.required),
  });

  updateClientDetails(updateclient){
    this.client=new ClientDetails(); 
    this.client.customerName = this.CoustumerName.value;
    this.client.companyName = this.CompanyName.value;
    this.client.emailId = this.Email.value;
    this.client.contactNumber = this.ContactNumber.value;
    this.client.address = this.Address.value;
   
   this.clientdetailService.updateClient(this.client.companyName,this.client).subscribe(
    data => {     
      this.isupdated=true;
      this.clientdetailService.getClientsList().subscribe(data =>{
        this.clients =data;
        console.log(this.clients);
        console.log(data);
        })
    },
    error => console.log(error));
  }

  get ClientId(){
    return this.clientupdateform.get('clientID');
  }

  get Email(){
    return this.clientupdateform.get('emailId');
  }
  
  get CoustumerName(){
    return this.clientupdateform.get('customerName');
  }
  
  get CompanyName(){
    return this.clientupdateform.get('companyName');
  }

  get ContactNumber(){
    return this.clientupdateform.get('contactNumber');
  }

  get Address(){
    return this.clientupdateform.get('address');
  }

  changeisUpdate(){
    this.isupdated=false;
  }

  deleteChanged(){
    this.isDeleted=false;
  }
 
}
