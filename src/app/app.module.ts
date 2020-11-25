import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewClientRegistersComponent } from './view-client-registers/view-client-registers.component';
import { ViewticketsComponent } from './view-tickets/view-tickets.component';
import { ViewGadgetsComponent } from './view-gadgets/view-gadgets.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent,
    ViewClientRegistersComponent,
    ViewticketsComponent,
    ViewGadgetsComponent,
    ReactiveFormsModule,
     DropDownListModule,
      ButtonModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
