import {​​​​​​​​ Injectable, EventEmitter,  }​​​​​​​​ from"@angular/core";
import {​​​​​​​​ HttpClient }​​​​​​​​ from'@angular/common/http';

@Injectable({​​​​​​​​
providedIn:'root'
}​​​​​​​​)
export class UserService {​​​​​​​​
private apiurl ="http://dummy.restapiexample.com/api/v1/employees";
receivedFilter: EventEmitter<string>;
fullname: string;

constructor(private http:HttpClient) {​​​​​​​​
this.receivedFilter = new EventEmitter<string>();
   }​​​​​​​​
raiseEvent(fullname: string): void {​​​​​​​​
this.fullname = fullname;
this.receivedFilter.emit(this.fullname);
}​​​​​​​​
getData(){​​​​​​​​
return this.http.get(this.apiurl);
}​​​​​​​​
deleteData(id) {​​​​​​​​
return this.http.delete("http://dummy.restapiexample.com/api/v1/delete" +id);
}​​​​​​​​
}​​​​​​​​


