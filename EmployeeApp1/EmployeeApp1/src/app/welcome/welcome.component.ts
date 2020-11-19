import {​​​​​​​​​ Component, OnInit ,ChangeDetectorRef,NgZone}​​​​​​​​​​​​​​​​ from'@angular/core';
import {​​​​​​​​​​​​​​​​ UserService }​​​​​​​​​​​​​​​​ from'../user.service';
import {​​​​​​​​​​​​​​​​ Router }​​​​​​​​​​​​​​​​ from'@angular/router';
import {​​​​​​​​​​​​​​​​ UserhomeComponent }​​​​​​​​​​​​​​​​ from'../userhome/userhome.component';
import {​​​​​​​​​​​​​​​​ HttpClient }​​​​​​​​​​​​​​​​ from'@angular/common/http';
import {​​​​​​​​​​​​​​​​ FormGroup, FormControl, Validators,FormGroupName }​​​​​​​​​​​​​​​​ from'@angular/forms';

@Component({​​​​​​​​​​​​​​​​
selector:'app-welcome',
templateUrl:'./welcome.component.html',
styleUrls: ['./welcome.component.css']
}​​​​​​​​​​​​​​​​)
export class WelcomeComponent implements OnInit {​​​​​​​​​​​​​​​​
 static msg:string;
ngZone: any;
formdata;
constructor(private service :UserService,private ref: ChangeDetectorRef,private http: HttpClient) {​​​​​​​​​​​​​​​​
ref.detach();
setInterval(()=> {​​​​​​​​​​​​​​​​this.ref.detectChanges(); }​​​​​​​​​​​​​​​​,500);}​​​​​​​​​​​​​​​​
ngOnInit(): void {​​​​​​​​​​​​​​​​
this.service.receivedFilter.subscribe((param: string) => {​​​​​​​​​​​​​​​​
this.ngZone.run(() =>{​​​​​​​​​​​​​​​​ WelcomeComponent.msg = param;}​​​​​​​​​​​​​​​​)
 
    }​​​​​​​​​​​​​​​​)
this.formdata=new FormGroup({​​​​​​​​​​​​​​​​
name:new FormControl(""),
salary:new FormControl(""),
age:new FormControl(""), 
    }​​​​​​​​​​​​​​​​)
   
 
    }​​​​​​​​​​​​​​​​
getmsg():string{​​​​​​​​​​​​​​​​
return WelcomeComponent.msg;
  }​​​​​​​​​​​​​​​​
msg1="";
onClickSubmit(data)
  {​​​​​​​​​​​​​​​​
var formData : any = new FormData();
formData.append("name",data.name);
formData.append("salary",data.salary);
formData.append("name",data.name);

this.http.post('http://dummy.restapiexample.com/api/v1/create',formData).subscribe(
      (response) =>{​​​​​​​​​​​​​​​​
console.log(response);
this.msg1= "Added succesfully";

      }​​​​​​​​​​​​​​​​,
      (error)=>{​​​​​​​​​​​​​​​​
console.log(error);
this.msg1 = error;
      }​​​​​​​​​​​​​​​​
    )

}​​​​​​​​​​​​​​​​

}​​​​​​​​​​​​​​​​


