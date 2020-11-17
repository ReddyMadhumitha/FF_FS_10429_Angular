import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'HTTPDemoApp';
  msg="";
  public persondata = []; 
  constructor(private userservice: UserService,private http: HttpClient) { }
  onClickSubmit(data)
  {
    var formData : any = new FormData();
    formData.append("name",data.name);
    formData.append("salary",data.salary);
    formData.append("name",data.name);

    this.http.post('http://dummy.restapiexample.com/api/v1/create',formData).subscribe(
      (response) =>{
        console.log(response);
        this.msg= "Added succesfully";

      },
      (error)=>{
        console.log(error);
        this.msg = error;
      }
    )

}
ngOnInit() {
  this.userservice.getData().subscribe((data) => {
     this.persondata = Array.from(Object.keys(data), k=>data[k]);
     console.log(this.persondata);
  });
}

}
