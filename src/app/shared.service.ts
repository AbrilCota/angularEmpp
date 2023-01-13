import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:57141/api";

  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/FirstPage');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/FirstPage',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/FirstPage/'+val);
  }

}
