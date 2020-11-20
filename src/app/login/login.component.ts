import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDetails } from '../classes/login-details';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Observable, Observer, of, observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 temp:any;
  private loginDetail = new LoginDetails();


  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    emailId : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('' , [Validators.required , Validators.minLength(3) ])
  });

  Login(LoginInformation)
  {
       this.loginDetail.emailId = this.EmailId.value;
       this.loginDetail.password = this.Password.value;

      this.loginService.sendloginDetails(this.loginDetail).subscribe(
        (response) => {
             var records = JSON.stringify(response)     
             console.log("Response ="+records);
            
             var statusCode = response.body.statusCode;
             console.log('Response Code ='+statusCode);

             if(statusCode==201){
              alert(response.body.message);
              this.router.navigate(['/profile', response]);
              }

              else if (statusCode == 200) {
              alert(response.body.message);
              this.router.navigate(['/profile', response]);
              }
             else
             {
              alert(response.body.message);
              this.router.navigate(['/login']);
             }
            error =>((error: any) => {
              console.log("Error in authentication");
              if (error.statusCode === 500) {
                  return Observable.throw(new Error(error.statusCode));
              }
              else if (error.statusCode === 400) {
                  return Observable.throw(new Error(error.statusCode));
              }
              else if (error.statusCode === 409) {
                  return Observable.throw(new Error(error.statusCode));
              }
              else if (error.statusCode === 406) {
                  return Observable.throw(new Error(error.statusCode));
              }
          });
       }
      );
  }

  get EmailId(){
      return this.loginForm.get('emailId');
  }

  get Password(){
      return this.loginForm.get('password');
  }


}

