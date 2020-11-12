import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminDetails } from '../classes/admin-details';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private adminDetail = new AdminDetails();

  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit() {
    if((this.adminService.isLoggedIn()) )
    {
        this.router.navigate(['/profile']);
    }
    else
    {
        this.router.navigate(['/login']);
    }
  }

  // create the form object.
  loginForm = new FormGroup({
    email : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required)
  });

  Login(LoginInformation)
  {
      this.adminDetail.emailId = this.Email.value;
      this.adminDetail.password = this.Password.value;

      this.adminService.sendAdminDetails(this.adminDetail).subscribe(
        response => {
            let result =  response.json();

            if(result > 0){
              if (this.adminService.authenticate(this.Email.value, this.Password.value))
            {
              this.router.navigate(['/profile', result]);
            }
          }
            if(result == -1)
            {
              alert("Invalid combination of Email and password");
            }
           
        error => {
            console.log("Error in authentication");
         }
       }
      );
  }

  get Email(){
      return this.loginForm.get('email');
  }

  get Password(){
      return this.loginForm.get('password');
  }


}

