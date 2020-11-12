import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private adminId;
  
  constructor(private adminService  : AdminService, private route : ActivatedRoute, private router : Router) { }
  ngOnInit() {
    if((this.adminService.isLoggedIn()) )
    {
      console.log(this.adminService.isLoggedIn);
    }
    else
    {
        this.router.navigate(['/login']);
    }

  }

}
