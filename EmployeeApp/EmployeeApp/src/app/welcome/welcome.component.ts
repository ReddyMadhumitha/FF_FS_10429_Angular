import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
static msg:string;
  ngZone: any;
  formdata;
  constructor(private service :UserService,private ref: ChangeDetectorRef,private http: HttpClient) {
    ref.detach();
    setInterval(()=> {this.ref.detectChanges(); },500);
   }

  ngOnInit(): void {
    this.service.recievedFilter.subscribe((param: string) => {
      this.ngZone.run(() =>{ WelcomeComponent.msg = param;})
    
   
    });
    this.formdata=new FormGroup({
      name:new FormControl("", Validators.compose([Validators.required])),
      salary:new FormControl("", Validators.compose([Validators.required])),
      age:new FormControl("", Validators.compose([Validators.required])),
    });
    
    }
    get msg():string{
      return WelcomeComponent.msg;
  }
  msg1="";
  onClickSubmit(data)
  {
    var formData : any = new FormData();
    formData.append("name",data.name);
    formData.append("salary",data.salary);
    formData.append("name",data.name);

    this.http.post('http://dummy.restapiexample.com/api/v1/create',formData).subscribe(
      (response) =>{
        console.log(response);
        this.msg1= "Added succesfully";

      },
      (error)=>{
        console.log(error);
        this.msg1 = error;
      }
    )

}


}
  