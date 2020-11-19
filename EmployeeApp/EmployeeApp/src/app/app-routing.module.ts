import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import  {Userhome1Component} from'./userhome1/userhome1.component'
const routes: Routes = [{path:"register", component:RegistrationComponent},  
{path: "userhome1", component : Userhome1Component},
{path:"userhome1/:p1", component :Userhome1Component},
{ path :"welcome", component : WelcomeComponent },
{ path :"login", component : LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const
RoutingComponent = [RegistrationComponent,WelcomeComponent,LoginComponent,Userhome1Component]