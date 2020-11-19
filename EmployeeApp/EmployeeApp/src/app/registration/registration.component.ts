import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
formdata;
constructor(private router: Router,private service:UserService) { }
 
  ngOnInit(): void {
    this.formdata=new FormGroup({
      sapcode:new FormControl("", Validators.compose([Validators.required])),
      fullname:new FormControl("", Validators.compose([Validators.required])),
      password:new FormControl("", this.passwordvalidation),
      confirmpassword:new FormControl("", Validators.compose([Validators.required])),
      age:new FormControl("", Validators.compose([Validators.required])),
      dateofjoining:new FormControl("", Validators.compose([Validators.required])),
      salary:new FormControl("", Validators.compose([Validators.required])),
      gender:new FormControl("", Validators.compose([Validators.required])),
      skillset:new FormControl("", Validators.compose([Validators.required])),
      qualification:new FormControl("", Validators.compose([Validators.required]))
 
  });
 
  }
 
  passwordvalidation(formcontrol)
  {
     if(formcontrol.value.length<5)
     {
       return {"password":true};
     }
  }
  onClickSubmit(data)
  {
    if(data.password.length>0 && data.password==data.confirmpassword)
    {
      alert("data.fullname you are successfully registered");
      
      this.router.navigate(["welcome"]);
      this.service.raiseEvent(data.fullname);
    
      //this.router.navigate(["userhome", { p1: "dear " + data.sapcode + data.fullname +", you are successfully registered" }]);
 }
    else{
    alert("Password and ConfirmPasssword are not same");
    }
  } 
}