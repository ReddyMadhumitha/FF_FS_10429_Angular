import {​​​​​​​​ NgModule }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ Routes, RouterModule }​​​​​​​​ from'@angular/router';
import { FormsModule} from '@angular/forms';
import {​​​​​​​​ RegistrationComponent }​​​​​​​​ from'./registration/registration.component'; 
import {​​​​​​​​ UserhomeComponent }​​​​​​​​ from'./userhome/userhome.component';
import {​​​​​​​​ WelcomeComponent }​​​​​​​​ from'./welcome/welcome.component';
import {​​​​​​​​ LoginComponent }​​​​​​​​ from'./login/login.component';
 
const routes: Routes = [
  {​​​​​​​​path:"registration", component:RegistrationComponent}​​​​​​​​,
  {​​​​​​​​path:"userhome", component :UserhomeComponent}​​​​​​​​,
  {​​​​​​​​path:"userhome/:p1", component :UserhomeComponent}​​​​​​​​,
  {​​​​​​​​ path :"welcome", component :WelcomeComponent }​​​​​​​​,
  {​​​​​​​​ path :"login", component :LoginComponent }​​​​​​​​,


];

@NgModule({​​​​​​​​
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
}​​​​​​​​)
export class AppRoutingModule {​​​​​​​​ }​​​​​​​​
export const RoutingComponent = [RegistrationComponent];

