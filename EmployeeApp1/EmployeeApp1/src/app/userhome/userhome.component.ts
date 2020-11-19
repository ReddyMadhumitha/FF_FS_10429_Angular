import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  [x: string]: any;
  msg: string;
  public persondata = [];
  constructor(private incomingrouter: ActivatedRoute, private service : UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.msg = (this.incomingrouter.snapshot.paramMap.get("p2"));
    this.service.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
    });

  }
  editData(i) { }
  msg2;
  deleteData(id) {
    this.myservice.deleteData(id).subscribe((response) => {
      console.log(response);
      this.msg2 = "DeletedSuccessfully";
    },
      (error) => {
        console.log(error);
        this.msg2 = error;

      });
    return this.msg2;
  }
}
