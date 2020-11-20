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

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.clientdetailService.getClientsList().subscribe(data =>{  
    this.clients =data;
    console.log('got data from console='+this.clients);
    this.dtTrigger.next();
    })
  }

  deleteclient(id: number) {
    this.clientdetailService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.clientdetailService.getClientsList().subscribe(data =>{
            this.clients =data
            })
        },
        error => console.log(error));
  }


  updateclient(id: number){
    this.clientdetailService.getClient(id)
      .subscribe(
        data => {
          this.clientlist=data           
        },
        error => console.log(error));
  }

  clientupdateform=new FormGroup({
    customerName: new FormControl('' , Validators.required),
    companyName: new FormControl('' , Validators.required),
    email: new FormControl('', Validators.required),
    contactNumber : new FormControl('' , Validators.required),
    address : new FormControl('' , Validators.required),
  });

  updateClientDetails(updateclient){
    this.client=new ClientDetails(); 
    this.client.clientId=this.ClientId.value;
    this.client.customerName = this.CoustumerName.value;
    this.client.companyName = this.CompanyName.value;
    this.client.email = this.Email.value;
    this.client.contactNumber = this.ContactNumber.value;
    this.client.address = this.Address.value;
   
   this.clientdetailService.updateClient(this.client.clientId,this.client).subscribe(
    data => {     
      this.isupdated=true;
      this.clientdetailService.getClientsList().subscribe(data =>{
        this.clients =data
        })
    },
    error => console.log(error));
  }

  get ClientId(){
    return this.clientupdateform.get('clientID');
  }

  get Email(){
    return this.clientupdateform.get('email');
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
 
}
