import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;
  retUrl:string;
  constructor(private router : Router, private authService : LoginService) { }
ngOnInit(): void {
    this.formdata=new FormGroup({
      emailid:new FormControl("", Validators.compose([Validators.required])),
      password:new FormControl("", Validators.compose([Validators.required])),
    });
    
  }
  passwordvalidation(formcontrol)
  {
     if(formcontrol.value.length<5)
     {
       return {"password":true};
     }
  }
  onClickSubmit(loginForm)
  { this.router.navigate(['dashboard']);
    this.authService.login(loginForm.username,loginForm.password).subscribe(data =>{
      if(this.retUrl!= null)
      {
        this.router.navigate([this.retUrl]);
      }
      else{
        this.router.navigate(['dashboard']);
      }
    });
  }
 
}
