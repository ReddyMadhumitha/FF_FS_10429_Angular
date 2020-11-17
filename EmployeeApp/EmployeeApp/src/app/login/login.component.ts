import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
formData;
  ngOnInit(): void {
    this.formData=new FormGroup({
      name:new FormControl(""),
      salary:new FormControl(""),
  })

}
onClickSubmit(data){
  if(data.username ="Madhu" && data.password == "12345"){
  alert("you are succesfully logged in");
  this.router.navigate(["userhome"]);
}
else {
  alert("invalid credentials");
}
}
}