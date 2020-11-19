import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "http://dummy.restapiexample.com/api/v1/employees";
  recievedFilter: EventEmitter<string>;
  constructor(private http: HttpClient) { this.recievedFilter = new EventEmitter<string>(); }
  fullname: string;
  raiseEvent(fullname: string): void {
    this.fullname = fullname;
    this.recievedFilter.emit(this.fullname);
  }
  getdata() {
    return this.http.get(this.apiurl);
  }
  deleteData(id){
    return this.http.delete("http://dummy.restapiexample.com/public/api/v1/delete/" + id);
  }
}





