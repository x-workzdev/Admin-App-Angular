import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ViewClientRegistersComponent } from './view-client-registers/view-client-registers.component';
import { ViewticketsComponent } from './view-tickets/view-tickets.component';
import { ViewGadgetsComponent } from './view-gadgets/view-gadgets.component';

const routes: Route[] = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path : 'profile',component : ProfileComponent},
  {path : 'clients',component : ViewClientRegistersComponent},
  {path : 'tickets',component : ViewticketsComponent},
  {path : 'gadgets',component : ViewGadgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
