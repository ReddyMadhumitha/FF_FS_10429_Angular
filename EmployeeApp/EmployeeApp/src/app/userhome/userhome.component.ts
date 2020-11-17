import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute,ParamMap} from'@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
msg:string;
 public persondata=[];
  constructor(private incomingrouter:ActivatedRoute,private service :UserService,private http: HttpClient) { }

  ngOnInit(): void {
    this.msg =(this.incomingrouter.snapshot.paramMap.get("p2"));
    this.service.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
  });

}
}
