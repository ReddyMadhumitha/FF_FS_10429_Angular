import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators,FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'HTTPDemoApp';
  msg="";
  public persondata = []; 
  constructor(private userservice: UserService,private http: HttpClient) { }
 


ngOnInit() {
  this.formdata=new FormGroup({
    name:new FormControl(""),
    salary:new FormControl(""),
    age:new FormControl("")

  });
  this.service.getData().subscribe((data) => {
     this.persondata = Array.from(Object.keys(data), k=>data[k]);
     console.log(this.persondata);
  });
}

}
